---
title: "Topic 6: Fastapi Deployment and API Hosting"
sidebar:
  order: 6
---

> ⏱️ **Estimated time:** 2-3 days

With your Prior knowledge of FastAPI from the previous phases, you will now focus on deploying that fastapi application on an Amazon EC2 instance.

---

## 📚 Learning Path

- Study: how to deploy a FastAPI application using [AWS EC2](https://www.youtube.com/watch?v=SgSnz7kW-Ko).
- Storing configuration and secrets safely: [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html) and [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/)
- Good to know (not required yet): AWS also offers managed ways to host web apps without managing a server yourself, such as [AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/) and [AWS App Runner](https://docs.aws.amazon.com/apprunner/). You'll meet containers and Amazon ECS (Elastic Container Service) in later phases.

---

## 🧪 Test Your Knowledge

1. How do you store and manage environment variables securely on an EC2 instance for FastAPI (for example, with Parameter Store or Secrets Manager)?  
2. How would you set up a security group rule to allow external HTTP traffic to your FastAPI application?

---

## 🛠️ Hands-on Task

Deploy a FastAPI application on an EC2 instance within the Public Subnet of your VPC.

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Reviewed FastAPI deployment resources for AWS EC2
- [ ] Understood how to manage environment variables securely
- [ ] Configured security group rules for HTTP traffic
- [ ] Deployed FastAPI on an EC2 instance in the public subnet
- [ ] Verified the API is accessible from the internet
