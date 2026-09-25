---
title: "Phase 5: Securing Your Cloud Applications"
sidebar:
  order: 0
  label: Overview
---

> ⏱️ **Estimated time:** 3-4 weeks
> 
> Author: [Ethan Troy](https://hackidle.com)

Welcome to Phase 5! This phase focuses on securing the cloud applications and infrastructure you've built throughout your journey. You'll take the Journal API application from previous phases and implement enterprise-grade security controls, monitoring, and incident response capabilities on **AWS (Amazon Web Services)**.

The phase is organized around the **NIST CSF** (the U.S. National Institute of Standards and Technology **C**yber**s**ecurity **F**ramework). The CSF groups security work into plain-English functions such as *Identify*, *Protect*, *Detect*, *Respond* and *Recover*. Each topic below maps to one or more of those functions.

---

## 🎯 Objectives

By the end of this phase, you will:

- Secure the Journal API application with proper IAM controls
- Implement data protection and secrets management
- Configure network security and secure connectivity
- Set up security monitoring and alerting systems
- Build automated threat detection and incident response
- Complete a comprehensive security implementation project

---

## 📋 Prerequisites

- Completed Phase 3: Cloud Platform Fundamentals (have deployed infrastructure)
- Completed Phase 4: DevOps Fundamentals (recommended but not required)
- Access to the Journal API application and infrastructure from previous phases
- An AWS account where you can sign in with administrator permissions (ideally through IAM Identity Center or an admin IAM role, not the root user)

:::caution[Watch your bill]
Several AWS security services used in this phase (for example Amazon GuardDuty, AWS Security Hub, Amazon Inspector and AWS Config) offer a **free trial** (typically 30 days) and then **charge based on usage**. Before you start:

- Create an [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) alert (for example at $10 and $25).
- Write down every service you turn on, so you can turn it off later.
- When you finish the phase, disable the paid services and delete the resources you created.
:::

---

## 🔗 How This Phase Builds on Your Journey

This phase takes the practical foundation you've built in Phases 1-4 and adds the security layer that makes your applications production-ready:

| Phase | How It Connects |
|-------|-----------------|
| **Phase 1-2** | Use your Linux and programming skills to configure security tools |
| **Phase 3** | Secure the AWS resources and networking you deployed |
| **Phase 4** | Add security scanning and monitoring to your CI/CD pipelines |
| **Phase 5** | Make everything production-ready with enterprise security controls |

:::tip Security is not separate
Security isn't a separate discipline—it's an essential skill that enhances every aspect of cloud engineering.
:::

For an excellent foundation in cloud security thinking, read these AWS overviews:
- [AWS Well-Architected Framework - Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html)  
- [AWS Security Documentation (all security services)](https://docs.aws.amazon.com/security/)
- [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/) - what AWS secures vs. what *you* secure

---

## 📚 Topics

| No. | Topic | What You'll Build |
|-----|-------|-------------------|
| 1 | [Identity and Access Management](/phase5/1-csf-iam-implementation/) | Secure IAM controls for your Journal API |
| 2 | [Data Protection & Secrets](/phase5/2-csf-data-protection/) | Encryption, key management, and secure secrets |
| 3 | [Network Security](/phase5/3-csf-network-security/) | Secure networking and connectivity |
| 4 | [Security Monitoring](/phase5/4-csf-monitoring/) | Real-time monitoring and alerting |
| 5 | [Threat Detection & Response](/phase5/5-csf-incident-response/) | Automated threat detection and incident response |
| 6 | [Capstone Project](/phase5/6-capstone/) | Comprehensive security implementation |

---

## ✅ Phase Checklist

Before completing this phase, make sure you can answer "yes" to these:

- [ ] I implemented proper IAM controls and least-privilege access
- [ ] I configured encryption and secrets management
- [ ] I set up network security and secure connectivity
- [ ] I implemented security monitoring and alerting
- [ ] I can detect and respond to security incidents
- [ ] I completed the capstone project
- [ ] I turned off paid security services and deleted resources I no longer need

---

## 🎓 Certifications (Optional)

| Provider | Certification |
|----------|--------------|
| AWS | [AWS Certified Security - Specialty](https://aws.amazon.com/certification/certified-security-specialty/) |
| Vendor-Neutral | CompTIA Security+ (good foundation) |

---

## 📖 Additional Resources

**Practice Labs:**
- [AWS Well-Architected Security Workshop](https://catalog.workshops.aws/well-architected-security/)
- [AWS Skill Builder](https://skillbuilder.aws/) - free security learning plans and labs
- [Cloud Security Alliance Guidance](https://cloudsecurityalliance.org/research/guidance/)

**Communities:**
- [/r/cloudsecurity](https://www.reddit.com/r/cloudsecurity/)
- [Cloud Security Alliance](https://cloudsecurityalliance.org/)
- [OWASP Cloud Security](https://owasp.org/www-project-cloud-security/)

---

## ➡️ What's Next?

[🎉 You're Done! →](/youre-done/)

This phase transforms you from someone who can build cloud applications to someone who can build **secure** cloud applications—a critical distinction in professional cloud engineering.
