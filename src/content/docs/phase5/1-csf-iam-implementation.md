---
title: "Topic 1: Identity and Access Management (IAM)"
sidebar:
  order: 1
---

> ⏱️ **Estimated time:** 3-4 days

Identity and Access Management (IAM) is your frontline defense for controlling who can access your cloud environment and what they can do once they're in. In the NIST CSF, this falls under the **Protect** function (specifically *Identity Management, Authentication and Access Control*). Before you secure your Journal API, you need to understand IAM fundamentals on AWS.

---

## 📚 Learning Path

### Learning Objectives

By the end of this topic, you will understand:

- IAM concepts: users, groups, roles, and policies
- The principle of least privilege and how to apply it
- Service accounts and workload identity (on AWS: IAM roles for services)
- Multi-factor authentication (MFA) and when to use it
- Common IAM security mistakes and how to avoid them

## Core Learning Resources

### 1. Read: IAM Fundamentals
Start with the AWS IAM documentation:

- [What is IAM?](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) - The core concepts: users, groups, roles and policies
- [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) - How people and services get *temporary* permissions instead of permanent keys
- [What is IAM Identity Center?](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html) - AWS's recommended way for humans to sign in (single sign-on) instead of creating individual IAM users

### 2. Watch: IAM in Action
- [AWS IAM Tutorial](https://www.youtube.com/watch?v=Ul6FW4UANGc) (30 minutes)

### 3. Learn: Security Best Practices
Read these essential security guides:
- [AWS IAM Security Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [OWASP Cloud Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cloud_Security_Cheat_Sheet.html)
- [CIS Cloud Security Controls](https://www.cisecurity.org/controls/cloud-security-controls)

## Key Concepts to Master

### IAM Components
- **Users**: Individual people or applications (on AWS, prefer IAM Identity Center users for people)
- **Groups**: Collections of users with similar permissions
- **Roles**: Set of permissions that can be assumed temporarily—no long-lived password or access key
- **Policies**: JSON documents that define permissions (which *actions* are allowed or denied on which *resources*)

### Principle of Least Privilege
Give users and services only the minimum permissions needed to do their job. This reduces the impact if credentials are compromised. On AWS, [IAM Access Analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html) can help you find unused permissions and resources that are shared publicly.

### Guardrails: Limiting the Maximum Permissions
AWS has two extra layers that cap what anyone can do, even if a policy is too generous:
- **[Permission boundaries](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)**: Set the *maximum* permissions a single IAM user or role can ever have.
- **[Service control policies (SCPs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html)**: Part of AWS Organizations; set the maximum permissions for *entire AWS accounts* (for example, "nobody in this account may disable CloudTrail").

### Service Accounts vs User Accounts
- **User accounts**: For people who need to access resources
- **Service accounts**: For applications and services to access resources. On AWS you don't create a "service account" user—you attach an **IAM role** to the service (an EC2 instance profile, an ECS task role, or a Lambda execution role). The service then receives short-lived credentials automatically, so there are no access keys to leak.

### Authentication vs Authorization
- **Authentication**: Who are you? (login, MFA)
- **Authorization**: What can you do? (permissions, policies)

### Protect the Root User
The email address you signed up with is the AWS account **root user**, which can do anything. Turn on MFA for it, don't create access keys for it, and use it only for the rare tasks that require it.

---

## 🧪 Test Your Knowledge

Use an AI assistant to test your understanding. Here are example prompts:

1. "Quiz me on the difference between IAM users, groups, and roles"
2. "Ask me to explain the principle of least privilege with examples"
3. "Test my knowledge of when to use service accounts vs user accounts"
4. "Quiz me on the difference between authentication and authorization"
5. "Ask me about common IAM security mistakes and how to prevent them"
6. "Test my understanding of IAM policies and how they work"
7. "Quiz me on when and why to use multi-factor authentication"
8. "Ask me about workload identity and why it's better than long-lived keys"
9. "Quiz me on the difference between AWS permission boundaries and service control policies"

## Additional Resources (Optional)

### Hands-on Practice 
- [AWS IAM Workshop](https://catalog.workshops.aws/general-immersionday/en-US/basic-modules/30-iam)
- [IAM Identity Center: Getting started](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html)

### Security Labs
- [PwnedLabs - AWS IAM Enumeration](https://pwnedlabs.io/labs/intro-to-aws-iam-enumeration)
- [PwnedLabs - IAM Breaches with CloudTrail](https://pwnedlabs.io/labs/identify-iam-breaches-with-cloudtrail-and-athena)

### Reference Documentation
- [AWS IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [IAM Access Analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html)
- [AWS Organizations and SCPs](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html)

:::note[Other clouds (optional)]
Google Cloud uses similar ideas under different names; see [Google Cloud IAM overview](https://cloud.google.com/iam/docs/overview) if you're curious. This course uses AWS throughout.
:::

## Next Steps

Once you feel confident with IAM concepts, move on to Topic 2. You'll implement all of this knowledge when you secure your Journal API in the capstone project.

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood IAM concepts (users, groups, roles, policies)
- [ ] Learned the principle of least privilege
- [ ] Understood service accounts vs user accounts (IAM roles for AWS services)
- [ ] Learned about MFA and when to use it
- [ ] Reviewed the AWS IAM and IAM Identity Center documentation
- [ ] (Optional) Completed hands-on IAM workshops
