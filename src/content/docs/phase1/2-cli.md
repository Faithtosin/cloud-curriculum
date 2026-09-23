---
title: "Topic 2: Cloud CLI Setup"
sidebar:
  order: 2
---

> ⏱️ **Estimated time:** 1-2 days

Now we're going to set up your cloud environment. This course uses **AWS (Amazon Web Services)** as its cloud provider, so everything you set up here will be used again in later phases.

A **CLI (Command Line Interface)** is a text-based tool you type commands into, instead of clicking buttons on a website. The **AWS CLI** is the program that lets you control your AWS account from your terminal.

---

## 📚 Learning Path

1. **Create an AWS account:**
   - [Create an AWS account](https://aws.amazon.com/resources/create-account/)
   - [AWS Free Tier](https://aws.amazon.com/free/) - see what you can use at no cost while learning

   > 💡 **Protect yourself from surprise bills:** Right after signing up, turn on **MFA (multi-factor authentication)** for your *root user* (the email/password you signed up with) and create a small **budget** that emails you if spending goes above a few dollars. See [AWS account root user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html) and [Managing your costs with AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html). Don't use the root user for day-to-day work.

2. **Get familiar with the AWS Management Console** (the AWS website where you can click around and see your resources):
   - [AWS Management Console](https://aws.amazon.com/getting-started/hands-on/getting-started-with-aws-management-console/)

3. **Learn why CLIs are better than clicking:**
   - [Why use a CLI](https://www.freecodecamp.org/news/command-line-for-beginners/)

4. **Try the AWS CLI with zero setup using AWS CloudShell:**
   - [AWS CloudShell](https://docs.aws.amazon.com/cloudshell/latest/userguide/welcome.html) is a terminal that runs in your browser, inside the AWS Console. The AWS CLI is already installed and already signed in as you. Open it and run `aws sts get-caller-identity` - it prints which account and user you are.

5. **Install the AWS CLI on your own computer:**
   - [Install or update the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
   - Check it worked with `aws --version`

6. **Sign the CLI in to your account:**
   - **Recommended:** Set up **IAM Identity Center** (IAM stands for *Identity and Access Management*, the AWS service that controls who can do what). It gives you a normal, non-root user and short-lived credentials that expire on their own, so there are no long-lived secret keys sitting on your laptop. Then run `aws configure sso` once, and `aws sso login` whenever your session expires.
     - [What is IAM Identity Center?](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html)
     - [Configuring IAM Identity Center authentication with the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html)
   - **Alternative:** `aws configure` asks for an *access key ID* and *secret access key* (a long-lived username/password pair for programs). It works, but these keys never expire on their own, so never share them or commit them to Git.
     - [Configuration and credential file settings](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
   - Confirm you're signed in: `aws sts get-caller-identity`

> ℹ️ **Other clouds:** Google Cloud and other providers have their own CLIs that work in a similar way. Once you know one cloud CLI well, picking up another is much easier - but stick with AWS for this course.

---

## ✅ Topic Checklist

Before moving on, make sure you can answer "yes" to these:

- [ ] I understand what a CLI is
- [ ] I know the benefits of using a CLI vs a UI for cloud resource management
- [ ] I created an AWS account and turned on MFA and a budget alert
- [ ] I installed the AWS CLI (and tried AWS CloudShell)
- [ ] I configured the AWS CLI with my account credentials and `aws sts get-caller-identity` works