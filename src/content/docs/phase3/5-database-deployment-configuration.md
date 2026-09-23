---
title: "Topic 5: Database Deployment and Configuration"
sidebar:
  order: 5
---

> ⏱️ **Estimated time:** 2-3 days

---

## 📚 Learning Path

- Study

  - [PostgreSQL Basics](https://www.prisma.io/dataguide/postgresql/getting-to-know-postgresql) and [Fundamentals](https://www.postgresql.org/docs/online-resources/): Understanding the architecture of PostgreSQL, including tables, schemas, and users.
  - Learn how to install PostgreSQL on an [AWS EC2 instance](https://www.youtube.com/watch?v=KQ4eIv6h7Sk)
  - Access Control & Authentication: Learn how to use **pg_hba.conf** to manage authentication and enforce secure database access.
  - The managed alternative: [Amazon RDS for PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html). RDS (Relational Database Service) runs PostgreSQL for you and handles backups, patching and failover. Installing it yourself on EC2 first teaches you what RDS automates.

> 💰 **Cost tip:** Both a small EC2 instance and a small RDS instance (such as `db.t3.micro` or `db.t4g.micro`) can fall under the [AWS Free Tier](https://aws.amazon.com/free/) for new accounts. Check the current limits, choose **Single-AZ**, and stop or delete the database when you're not using it.

---

## 🧪 Test Your Knowledge

Test your knowledge with an AI assistant, here are some example prompts to test your knowledge of relational database deployment and its configuration:

1. Explain the key components of PostgreSQL architecture. How do tables, schemas, and roles interact?
2. What are the steps to install and configure PostgreSQL on a Linux-based EC2 instance?
3. How would you securely configure PostgreSQL for remote access within a private subnet?
4. What is the purpose of ```pg_hba.conf```, and how does it control authentication in PostgreSQL?
5. Explain how to create and manage PostgreSQL users and roles with appropriate permissions.
6. What are the trade-offs between running PostgreSQL yourself on EC2 and using Amazon RDS for PostgreSQL?

---

## 🛠️ Hands-on Task

Deploy a PostgreSQL Database in the Private Subnet of your VPC (install it on an EC2 instance, then optionally compare the experience with Amazon RDS for PostgreSQL).

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood PostgreSQL basics and architecture
- [ ] Learned how to install PostgreSQL on an EC2 instance
- [ ] Understood access control with pg_hba.conf
- [ ] Deployed PostgreSQL in a private subnet
- [ ] Configured secure remote access to the database
- [ ] Created database users with appropriate permissions
