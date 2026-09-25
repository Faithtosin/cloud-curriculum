---
title: "Topic 3: Cloud Networking Fundamentals"
sidebar:
  order: 3
---

> ⏱️ **Estimated time:** 3-4 days

On the previous topic you worked on deploying a VM in the cloud, using default configurations like the default VPC (Virtual Private Cloud), Security Groups etc. The focus on this phase is to deepen your understanding of cloud networking concepts essential for secure deployments, using **Amazon VPC**.

> 💰 **Cost tip:** VPCs, subnets, route tables and internet gateways are free, but a **NAT gateway is billed by the hour plus data processed and is not covered by the Free Tier**. If you create one to test, delete it the same day. Keep your [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) alert on.

---

## 📚 Learning Path

- Study

  - Understanding [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html), your own private, isolated network inside AWS
  - What is [Subnetting](https://audrey01.hashnode.dev/subnets-ip-addresses-ip-address-classes-cidr-blocks): Public vs. Private subnets, CIDR (Classless Inter-Domain Routing) blocks.
  - Gateways (IGW, NAT, VPN) for secure internet access on AWS: [connect your VPC to other networks](https://docs.aws.amazon.com/vpc/latest/userguide/extend-intro.html), including [internet gateways](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html) (IGW) and [NAT gateways](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) (Network Address Translation)

---

## 🧪 Test Your Knowledge

Once you are done with the provided resources, watch the [what is an IP Address](https://www.youtube.com/watch?v=5WfiTHiU4x8). Everything here should make sense to you, if not, you are not ready to move on.

Test your knowledge with an AI assistant, here are some example prompts to test your cloud networking concepts:

1. What is the purpose of Route Tables, and how do they impact network traffic?
2. How does a route table control the flow of traffic in a cloud network?
3. How does CIDR notation define IP address ranges in cloud networks?
4. How do public and private subnets differ, and when should each be used?
5. How does traffic flow between public and private subnets within a VPC?
6. What is the significance of the 0.0.0.0/0 route in a route table?
7. Explain the difference between NAT Gateway and Internet Gateway.

---

## 🛠️ Hands-on Task

- Create a custom VPC in AWS.
- Create Two Subnets(Private and Public) within the VPC.
- Configure Internet Access for proper routing (attach an internet gateway).
- Associate subnets with appropriate route tables for controlled traffic flow
- Set up the Security group.
- Launch an EC2 instance each within the Public Subnet and the Private Subnet of your VPC.

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood Amazon VPC concepts
- [ ] Learned about subnetting and CIDR blocks
- [ ] Understood the difference between public and private subnets
- [ ] Learned about gateways (Internet Gateway, NAT Gateway)
- [ ] Created a VPC with public and private subnets
- [ ] Configured route tables correctly
- [ ] Launched EC2 instances in both public and private subnets
