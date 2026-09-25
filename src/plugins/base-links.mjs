// Astro integration: after the build, prefix root-relative links in the
// generated HTML (e.g. `href="/phase1/"`) with the site's `base`. Content can then
// keep plain `/phase1/` links and still work on GitHub Pages under
// `/cloud-curriculum/`.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function* htmlFiles(dir) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) yield* htmlFiles(path);
		else if (entry.name.endsWith('.html')) yield path;
	}
}

export default function baseLinks() {
	let prefix = '';
	return {
		name: 'base-links',
		hooks: {
			'astro:config:done': ({ config }) => {
				prefix = config.base.replace(/\/$/, '');
			},
			'astro:build:done': async ({ dir }) => {
				if (!prefix) return;
				const escaped = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
				// href="/x" but not href="//x" and not already under the base.
				const re = new RegExp(`href="/(?!/)(?!${escaped.slice(1)}(?:/|"))`, 'g');
				for await (const file of htmlFiles(fileURLToPath(dir))) {
					const html = await readFile(file, 'utf8');
					const fixed = html.replace(re, `href="${prefix}/`);
					if (fixed !== html) await writeFile(file, fixed);
				}
			},
		},
	};
}
