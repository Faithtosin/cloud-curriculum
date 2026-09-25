---
title: "Topic 4: Secure Remote Access"
sidebar:
  order: 4
---

> ⏱️ **Estimated time:** 1-2 days

In the previous topic, you learned about cloud networking fundamentals, including VPCs, subnets, and traffic flow. Now, the focus is on understanding secure remote access mechanisms that protect cloud resources from unauthorized access.

---

## 📚 Learning Path

- Study

  - Session-based access management: Using the AWS-native service [AWS Systems Manager Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html), which lets you open a shell on an EC2 instance from your browser or the AWS CLI (command line interface) without opening SSH (Secure Shell) or RDP (Remote Desktop Protocol) ports
  - A lighter-weight alternative: [EC2 Instance Connect](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-eic.html), which uses IAM permissions to push a short-lived SSH key to your instance

---

## 🧪 Test Your Knowledge

Once you are done with the provided resources, check this out [here](https://awstip.com/aws-dont-ssh-into-your-public-bastion-use-ssm-session-manager-instead-a5b527f8db41)
Once you are done studying, test your understanding with these prompts:

- What are the different secure remote access methods in cloud environments?
- What are the advantages of using a session-based access tool (e.g., AWS Systems Manager Session Manager) instead of direct SSH/RDP?
- Why does an EC2 instance need an IAM role (instance profile) and the SSM Agent to work with Session Manager?

---

## 🛠️ Hands-on Task

- Configure session-based access for your EC2 instances using AWS Systems Manager Session Manager (attach an IAM role with the `AmazonSSMManagedInstanceCore` managed policy)
- Connect to the instance in your **private** subnet from Topic 3 without opening port 22 to the internet (hint: a private instance still needs a path to the Systems Manager service, either through a NAT gateway or VPC endpoints; research which is cheaper for a short test)
- Apply IAM policies to enforce least privilege access for remote users

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood session-based access management concepts
- [ ] Learned about AWS Systems Manager Session Manager and EC2 Instance Connect
- [ ] Understood the security benefits over direct SSH/RDP
- [ ] Configured Session Manager access to your EC2 instances
- [ ] Applied least privilege IAM policies for remote access
