---
title: "Topic 2: Continuous Integration and Continuous Deployment"
sidebar:
  order: 2
---

> ⏱️ **Estimated time:** 3-4 days

One challenge you'll face after the previous phase is the need to manually run rebuild and push commands for every change made to your code, which can become a tedious and error-prone process. In this topic, we will explain how to automate this entire process using Continuous Integration (CI) and Continuous Deployment (CD) pipelines. These pipelines allow you to automatically build, test, and deploy your application every time changes are made, ensuring a smooth and reliable development workflow.

There are various CI/CD tools available, such as Jenkins, GitHub Actions, and GitLab CI, which streamline this process by automatically executing tasks and deploying code based on triggers like code commits, pull requests, or scheduled events.

---

## 📚 Learning Path

### Study

- What is [Continuous Integration (CI)](https://www.ibm.com/think/topics/continuous-integration) and [Continuous Delivery (CD)](https://www.ibm.com/think/topics/continuous-delivery)?
- What is the difference between [Continuous Integration, Continuous Delivery, and Continuous Deployment](https://www.jetbrains.com/teamcity/ci-cd-guide/continuous-integration-vs-delivery-vs-deployment/)?
- Implementing CI/CD pipelines with:
  - [GitHub Actions](https://www.youtube.com/watch?v=R8_veQiYBjI) - our recommended tool. It lives next to your code on GitHub and has official actions for AWS.
  - [AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html) - AWS's own CI/CD service ([video walkthrough](https://www.youtube.com/watch?v=zZt-LTY9hAE)). Good to know it exists; you don't need it if you use GitHub Actions.
- Connecting GitHub Actions to AWS **securely**:
  - Never paste long-lived AWS access keys into your repository or GitHub secrets. Instead, use **OIDC (OpenID Connect)**: GitHub proves who it is to AWS, and AWS hands the workflow short-lived credentials by letting it assume an **IAM role** (a set of permissions in AWS Identity and Access Management) that you created for it.
  - [Configuring OpenID Connect in Amazon Web Services (GitHub Docs)](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
  - [Create an OIDC identity provider in IAM (AWS Docs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)
  - Official actions: [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) and [aws-actions/amazon-ecr-login](https://github.com/aws-actions/amazon-ecr-login)

Here is roughly what the AWS part of a GitHub Actions workflow looks like (replace the placeholders with your own values):

```yaml
permissions:
  id-token: write   # lets the workflow request an OIDC token
  contents: read

steps:
  - uses: actions/checkout@v4
  - uses: aws-actions/configure-aws-credentials@v4
    with:
      role-to-assume: arn:aws:iam::<ACCOUNT_ID>:role/<YOUR_GITHUB_ROLE>
      aws-region: us-east-1
  - uses: aws-actions/amazon-ecr-login@v2
  # ...then docker build, tag and push to your ECR repository
```

---

## 🛠️ Hands-on Tasks

### Basic CI/CD Pipeline Setup

1. Set up a basic CI/CD pipeline for your containerized application from the previous phase
2. Use GitHub Actions or Jenkins to automatically:
   - Build your application
   - Run tests
   - Build a Docker image
   - Push the image to Amazon ECR, authenticating with OIDC and an IAM role (no stored access keys)
3. Configure the pipeline to trigger on code commits to your main branch
4. Add a simple notification system to alert you of successful deployments or failures

### Advanced Challenge (Optional)

Implement a multi-environment deployment pipeline that deploys to staging first, runs tests, and then promotes to production. For example, deploy new images to a staging service on [Amazon ECS with Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html), then to a production service after a manual approval using [GitHub environments](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment). Remember to delete the staging resources when you're done so they don't keep costing money.

---

## 🧪 Test Your Knowledge

Use an AI assistant to test your understanding of CI/CD concepts. Here's how:

1. Start a new conversation with ChatGPT, Claude, or Google Gemini
2. Use this initial prompt:

    ```txt
    I'm learning about CI/CD pipelines. I'd like you to act as an interviewer:
    - Ask me questions one at a time about CI/CD concepts
    - Don't provide the answers immediately
    - Give me feedback on my responses
    - If I'm incorrect, guide me toward the right answer
    - Share relevant real-world examples after each answer
    Can we start?
    ```

3. Try to answer each question the AI asks. Key topics you should be ready to discuss:
   - CI/CD fundamentals and differences
   - Pipeline components and stages
   - Version control integration
   - Quality gates and testing
   - Deployment strategies
   - Security considerations

4. After each response:
   - Ask for feedback on your answer
   - Request real-world examples
   - Ask for clarification if needed

:::tip
Pro tip: Share your specific context: "I'm practicing with a containerized Node.js app using GitHub Actions. Please focus your questions around that scenario."
:::

Remember: The goal is to test your understanding, not to get perfect answers immediately.

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood CI/CD fundamentals and differences
- [ ] Learned about pipeline components and stages
- [ ] Set up a basic CI/CD pipeline (GitHub Actions or similar)
- [ ] Configured automatic builds on code commits
- [ ] Implemented Docker image building and pushing to Amazon ECR
- [ ] Connected GitHub Actions to AWS using OIDC and an IAM role (no long-lived keys)
- [ ] Added notifications for success/failure
- [ ] (Optional) Implemented multi-environment deployment