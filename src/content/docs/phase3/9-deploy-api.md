---
title: "Topic 9: Cloud Deployment Capstone"
sidebar:
  order: 9
---

> ⏱️ **Estimated time:** 1 week

Deploy your Journal API from the Phase 2 Capstone to a secure 2-tier architecture on AWS. This capstone challenges you to research, design, and implement a production-ready environment with proper networking and security.

---

## 📚 Learning Path

### Challenge Overview

Create a secure 2-tier architecture:
- **Tier 1**: FastAPI application server on an EC2 instance in a public subnet (internet-accessible)
- **Tier 2**: PostgreSQL database in a private subnet, on EC2 or Amazon RDS (private, secure)

## Learning Objectives

- Design secure cloud networking with public/private subnets
- Implement security groups following least privilege principles
- Configure remote database access securely
- Deploy a production-ready multi-tier application

## Prerequisites

- Completed Phase 2 Capstone (Journal API with AI analysis working locally)
- AWS account with an IAM user or role that has appropriate permissions (not the root user)
- An AWS Budgets alert set up (see [Topic 7](/phase3/7-cost-management/)), and a plan to stay within the [AWS Free Tier](https://aws.amazon.com/free/) where possible
- SSH key pair for server access
- Access to an LLM: Amazon Bedrock (recommended; your EC2 instance can call it using an IAM role instead of an API key) or an API key from a provider such as OpenAI or Anthropic

## Your Mission

### 1. Design Your Architecture

Research and plan your cloud infrastructure:
- How will you separate public and private resources?
- What networking components do you need?
- How will you secure communication between tiers?

### 2. Deploy the API Server

Set up your application server in the public tier:
- Choose an appropriate EC2 instance type (Free Tier eligible if possible)
- Deploy your Journal API application
- Configure secure access (Session Manager) and networking (security groups)

### 3. Deploy the Database Server

Set up PostgreSQL in the private tier:
- Ensure it's not directly accessible from the internet (private subnet, no public IP)
- Configure it to accept connections only from your API server (hint: a security group rule can reference another security group)
- Implement proper security measures

### 4. Test Your Deployment

Validate your architecture:
- All API endpoints work correctly
- Database is properly secured
- Data persists between restarts

## Success Criteria

Your deployment succeeds when you can demonstrate:

- ✅ API accessible from the internet
- ✅ Database only accessible from API server (not internet)
- ✅ All CRUD operations work via API endpoints
- ✅ AI analysis endpoint returns sentiment and summary
- ✅ LLM credentials stored securely (IAM role for Bedrock, or an API key in an environment variable, Parameter Store or Secrets Manager, never in code)
- ✅ Data persists between server restarts
- ✅ Security follows least privilege principles

## Document Your Learning

Create a technical writeup covering:
- Your architecture design and reasoning
- Security decisions and trade-offs
- Challenges encountered and solutions
- Key learnings about cloud deployment

Share your progress in the [Discussions](https://github.com/learntocloud/learn-to-cloud-app/discussions)!

## Remember

This is about understanding cloud patterns, not following a recipe. Research, experiment, and learn from the journey. AWS often has more than one way to do the same thing (for example, PostgreSQL on EC2 vs. Amazon RDS) - research the trade-offs and pick what works best for you. When you're done, stop or delete resources you no longer need so they don't keep costing money.

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Designed a secure 2-tier architecture
- [ ] Deployed API server in public tier
- [ ] Deployed PostgreSQL in private tier
- [ ] Database only accessible from API server
- [ ] All CRUD operations working via API
- [ ] AI analysis endpoint returning results
- [ ] LLM credentials stored securely
- [ ] Data persisting between restarts
- [ ] Security following least privilege principles
- [ ] Created technical documentation of your deployment