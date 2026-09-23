---
title: "Topic 4: SSH"
sidebar:
  order: 4
---

> ⏱️ **Estimated time:** 1 day

Now you need to learn how to access a virtual machine via SSH.

---

## 📚 Learning Path

1. **Study:** [What is SSH](https://www.cloudflare.com/learning/access-management/what-is-ssh/)

2. **Practice connecting to a VM:**
   On AWS, a virtual machine (VM) is called an **EC2 instance** (EC2 stands for *Elastic Compute Cloud*). To log in with SSH you use a **key pair**: AWS keeps the public key on the instance, and you keep the private key file (`.pem`) safe on your computer.
   - [Amazon EC2 key pairs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)
   - [Connect to your Linux instance using SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-ssh.html)

   > 💡 **Cost tip:** Pick a Free Tier eligible instance type, and **stop or terminate the instance when you're done** so it doesn't keep billing you.

---

## ✅ Topic Checklist

Before moving on, make sure you can answer "yes" to these:

- [ ] I understand what SSH is and why it's used
- [ ] I know how to SSH into a VM from my local terminal
- [ ] I understand SSH keys and why they're better than passwords