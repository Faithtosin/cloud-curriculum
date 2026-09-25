---
title: "Topic 3: Infrastructure as Code (IaC)"
sidebar:
  order: 3
---

> ⏱️ **Estimated time:** 3-4 days

Infrastructure as Code (IaC) is a key DevOps practice  that allows you to manage and provision infrastructure using code, rather than manual processes, like using console. It ensures consistency, repeatability, and scalability in managing cloud resources.

---

## 📚 Learning Path

### Study

- What is [Infrastructure as Code](https://www.hashicorp.com/resources/what-is-infrastructure-as-code)?
- We recommend [Terraform](https://developer.hashicorp.com/terraform/intro). It works with many cloud providers through plugins called *providers*, and it is one of the most in-demand IaC tools in job listings. In this course you'll use it with the **AWS provider**.
- Learn the basics of Terraform:
  - [Terraform init](https://developer.hashicorp.com/terraform/cli/commands/init)
  - [Terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan)
  - [Terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply)
  - [Terraform destroy](https://developer.hashicorp.com/terraform/cli/commands/destroy)
- Learn the Terraform AWS provider:
  - [AWS Provider documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
  - [Get Started with Terraform on AWS (HashiCorp tutorial)](https://developer.hashicorp.com/terraform/tutorials/aws-get-started)
- Know the AWS-native alternatives (optional reading - you don't need to learn them now):
  - [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) - AWS's built-in IaC service, written in YAML or JSON templates.
  - [AWS CDK (Cloud Development Kit)](https://docs.aws.amazon.com/cdk/v2/guide/home.html) - define AWS infrastructure in a programming language like Python or TypeScript; it generates CloudFormation for you.

:::caution[Credentials and cost]
Terraform uses the same credentials as the AWS CLI, so set up the CLI with a non-root IAM user or IAM Identity Center (single sign-on) profile first - never use your root account's keys. Everything Terraform creates is real and can cost money. Stick to [Free Tier](https://aws.amazon.com/free/)-eligible resources (such as a small EC2 instance or an S3 bucket), set up an [AWS Budget](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) alert, and always run `terraform destroy` when you finish.
:::

---

## 🛠️ Hands-on Tasks

### Basic IaC Project

1. Install Terraform on your system:
   - [Install Terraform](https://developer.hashicorp.com/terraform/install)
2. Write a Terraform configuration file to:
   - Create an Amazon EC2 virtual machine (use a Free Tier-eligible instance type).
   - Configure a security group to allow SSH access from your own IP address only (not `0.0.0.0/0`).
   - Or deploy a static site to an Amazon S3 bucket.
3. Learn how you can deploy it using Terraform:
   - Run `terraform init` to set up the working directory.
   - Run `terraform plan` to preview changes.
   - Run `terraform apply` to create the resources.
5. Verify the resources in the AWS Management Console (make sure you're looking at the same Region you deployed to).
6. Destroy the resources:
   - Run `terraform destroy` to clean up.

### Advanced Challenge (Optional) - Modular Terraform Design with GitHub Copilot

Use what you learned in Phase 2 - Collaborate with GitHub Copilot to design a modular Terraform configuration that supports a multi-tier application:

1. Organize your infrastructure into reusable modules.
   - VPC (Virtual Private Cloud) — public and private subnets, routing
   - Web server tier — EC2 or ECS on Fargate for compute, an Application Load Balancer
   - Database tier - Amazon RDS (managed database), backup configuration
   - Security - security groups, IAM roles, encryption with AWS KMS
2. Use variables to parameterize your configuration.
3. Create module outputs for cross-module communication.
4. Implement remote state management using the [S3 backend](https://developer.hashicorp.com/terraform/language/backend/s3) (state stored in an S3 bucket, with state locking).
5. Deploy and verify your resources.
6. Destroy the resources when complete. Load balancers, NAT gateways and RDS databases are billed by the hour, so don't leave them running.

---

## 🧪 Test Your Knowledge

Use an AI assistant to test your understanding of IaC concepts. Here are some example prompts:

1. What are the benefits of using Infrastructure as Code?
2. How does Terraform ensure idempotency in resource management?
3. What is the purpose of the `terraform state` file?
4. How do you manage sensitive data like API keys in Terraform?
5. What is the difference between `terraform plan` and `terraform apply`?
6. What are terraform modules and why/how you should use them?
7. What are the best practices for terraform?
8. What are the benefits of using coding assistants to generate IaC templates?
9. How would you ensure quality and security when using AI-generated IaC?

## Resources

- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform Best Practices](https://www.terraform-best-practices.com/)
- [AWS Terraform Example (video)](https://youtu.be/P4A62b1dkJE?si=-Lsed7_wyvbXv0RI)
- [Terraform AWS Provider documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Get Started with Terraform on AWS](https://developer.hashicorp.com/terraform/tutorials/aws-get-started)

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood Infrastructure as Code concepts
- [ ] Installed Terraform on your system
- [ ] Learned basic Terraform commands (init, plan, apply, destroy)
- [ ] Written Terraform configuration for an EC2 instance or S3 static site
- [ ] Deployed and verified resources in your AWS account
- [ ] Destroyed resources to clean up
- [ ] (Optional) Created modular Terraform design with GitHub Copilot