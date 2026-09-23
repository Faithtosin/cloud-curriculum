---
title: "Topic 1: Virtual Machines and Compute Services"
sidebar:
  order: 1
---

> ⏱️ **Estimated time:** 2-3 days

Virtualization and compute services are fundamental to cloud engineering, enabling scalable and flexible infrastructure. In this topic, you will deploy a virtual machine (VM) on AWS using **Amazon EC2** (Elastic Compute Cloud), the AWS service that lets you rent virtual servers by the second.

> 💰 **Cost tip:** Pick an instance type marked **"Free tier eligible"** (for example `t2.micro` or `t3.micro`, depending on your Region) and make sure your [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) alert is set up. **Stop** or **terminate** your instance when you're done practicing. See the [AWS Free Tier](https://aws.amazon.com/free/) page for current limits.

---

## 📚 Learning Path

- Study
  - What are [Compute Services](https://aws.amazon.com/what-is/compute/)
  - Understanding [Virtualization](https://aws.amazon.com/what-is/virtualization/)
  - Instance Types & OS Selection: Choosing the right VM specs (CPU, RAM, storage) with [Amazon EC2 instance types](https://aws.amazon.com/ec2/instance-types/)
  - Deploying Virtual Machines on AWS: [Get started with Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html) and the [Amazon EC2 documentation](https://docs.aws.amazon.com/ec2/)

> If you later want to try GCP, its equivalent of EC2 is called Compute Engine. The concepts you learn here carry over.

---

## 🧪 Test Your Knowledge

Test your knowledge with an AI assistant, here are some example prompts to test your knowledge of Virtualization and Compute Services:

1. Can you explain what Compute Services are and why they are important in cloud computing?
2. Can you describe how virtualization works and its role in cloud infrastructure?
3. Can you differentiate between Virtualization and Compute Services.
4. Can you explain the different Amazon EC2 instance families (such as general purpose `t`/`m`, compute optimized `c`, memory optimized `r`) and when to use each?
5. Can you explain what a hypervisor is, how it works, and why it is essential for virtualization?

---

## 🛠️ Hands-on Tasks

Launch an Amazon EC2 instance using the default configuration (a Free Tier eligible instance type and an Amazon Linux or Ubuntu image). Connect to it, then stop or terminate it when you're finished.

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood what compute services are and their importance
- [ ] Learned how virtualization works
- [ ] Understood instance types and OS selection criteria
- [ ] Successfully launched an EC2 instance on AWS
- [ ] Verified the instance is accessible and running
