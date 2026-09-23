// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const phase = (label, directory) => ({ label, collapsed: true, items: [{ autogenerate: { directory } }] });

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Cloud Curriculum',
			description: 'A free, beginner-friendly path to becoming a cloud engineer, AWS first.',
			components: { Footer: './src/components/Footer.astro' },
			sidebar: [
				{ label: 'Start here', link: '/' },
				phase('Phase 0: Starting from zero', 'phase0'),
				phase('Phase 1: Linux and Bash', 'phase1'),
				phase('Phase 2: Programming & AI', 'phase2'),
				phase('Phase 3: Cloud Fundamentals', 'phase3'),
				phase('Phase 4: DevOps', 'phase4'),
				phase('Phase 5: Cloud Security', 'phase5'),
				{ label: "You're done", link: '/youre-done/' },
				{ label: 'Credits & license', link: '/credits/' },
			],
		}),
	],
});
