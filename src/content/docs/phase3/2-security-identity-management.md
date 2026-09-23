---
title: "Topic 2: Security and Identity Management"
sidebar:
  order: 2
---

> ⏱️ **Estimated time:** 2-3 days

This section focuses on identity and access management (IAM) to control permissions and protect cloud resources, as well as securing cloud instances using security groups and firewall rules. On AWS, these are handled by **AWS IAM** (who can do what in your account) and **security groups** (which network traffic can reach your EC2 instances).

---

## 📚 Learning Path

- Study

  - IAM concepts: Users, Groups, Roles, Policies in AWS: read [What is IAM?](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html), this beginner-friendly [walkthrough of IAM users, groups, policies and roles](https://medium.com/%40MadhavPrajapati/getting-started-with-aws-iam-users-groups-policies-and-role-fee140ed1e93), and [Security best practices in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

  - [AWS Security Groups](https://www.youtube.com/watch?v=uYDT2SsHImQ) (see also the official [security groups documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html)) vs. [Network ACLs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html) (access control lists that filter traffic at the subnet level)

> 🔐 **Protect your root user:** The email you signed up with is the account's "root user" and can do anything. Turn on multi-factor authentication (MFA) for it, and use an IAM user or IAM Identity Center user for day-to-day work instead.

---

## 🧪 Test Your Knowledge

After studying, test your knowledge with these AI prompts:

1. What is the difference between IAM Users, Groups, and Roles?
2. How does RBAC (role-based access control) differ from ABAC (attribute-based access control) in cloud identity management?
3. How do IAM policies control access to cloud resources?
4. What steps can be taken to enforce the Least Privilege Principle in IAM?
5. What are the difference between inbound rule and outbound rule.
6. What is the difference between security groups and traditional firewalls?
7. How do security groups differ from network ACLs in cloud networking?
8. What is the significance of stateful vs. stateless rules in cloud security?

---

## 🛠️ Hands-on Task

- Create IAM users and groups with specific permissions in your AWS account.
- Implement IAM roles for secure access management (for example, a role that an EC2 instance can use)
- Define and apply IAM policies to restrict access to sensitive resources
- Create a security group for an EC2 instance
- Define inbound rules to allow specific traffic (e.g., HTTP, SSH, RDP)
- Define outbound rules to control external communication.
- Apply security group rules to an EC2 instance and verify access restrictions.
- Test traffic flow by attempting to connect from an allowed and a restricted IP address.

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood IAM concepts (Users, Groups, Roles, Policies)
- [ ] Learned about RBAC and least privilege principle
- [ ] Created IAM users and groups with specific permissions
- [ ] Implemented IAM roles for secure access
- [ ] Created and configured security groups
- [ ] Tested inbound and outbound rules
- [ ] Verified access restrictions work correctly
