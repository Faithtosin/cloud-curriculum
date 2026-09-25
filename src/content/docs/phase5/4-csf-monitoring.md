---
title: "Topic 4: Security Monitoring"
sidebar:
  order: 4
---

> ⏱️ **Estimated time:** 2-3 days

Security monitoring is your early warning system for detecting threats and understanding what's happening in your cloud environment. This is the NIST CSF **Detect** function (*Continuous Monitoring*). Before implementing monitoring for your Journal API, you need to understand logging, alerting, and monitoring fundamentals on AWS.

---

## 📚 Learning Path

### Learning Objectives

By the end of this topic, you will understand:

- Cloud logging services and what events to monitor
- Security Information and Event Management (SIEM) concepts
- How to create effective alerts that minimize false positives
- Key security metrics to track
- Log analysis and threat detection techniques

## Core Learning Resources

### 1. Read: Cloud Monitoring Fundamentals
Start with the core AWS logging and monitoring services:

- [AWS CloudTrail User Guide](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) - Records every API call made in your account (who did what, when, from where). This is your audit log.
- [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html) - Collects metrics and logs, and sends alarms
- [What is AWS Security Hub?](https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html) - One place to see security findings from many AWS services and check your account against best-practice standards
- [What is AWS Config?](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html) - Records configuration changes to your resources and flags ones that break your rules (for example, "S3 buckets must not be public")

### 2. Watch: Security Monitoring in Practice
- [AWS Security Monitoring](https://www.youtube.com/watch?v=VhEhcWp-m8s) (35 minutes)
- [SIEM Fundamentals](https://www.youtube.com/watch?v=G8PFCd2OhJ8) (40 minutes)

### 3. Learn: Security Monitoring Best Practices
- [NIST Computer Security Incident Handling Guide](https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final)
- [SANS Security Monitoring Guide](https://www.sans.org/white-papers/35066/)
- [AWS Well-Architected Security Pillar - Detection](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/detection.html)

## Key Concepts to Master

### Essential Log Sources
- **Authentication Logs**: Who's logging in, when, and from where (console sign-ins appear in CloudTrail)
- **API Call Logs**: What actions are being performed on your resources (CloudTrail)
- **Network Logs**: Traffic patterns and potential intrusions (VPC Flow Logs)
- **Application Logs**: Your application's security-relevant events (CloudWatch Logs)
- **Infrastructure Logs**: Changes to your cloud resources (AWS Config, CloudTrail)

### Security Metrics to Track
- Failed authentication attempts
- Unusual API call patterns
- Network traffic anomalies
- Resource configuration changes
- Data access patterns

### SIEM Concepts
**Security Information and Event Management**:
- **Collect**: Gather logs from multiple sources
- **Correlate**: Find patterns across different log sources
- **Alert**: Notify when suspicious patterns are detected
- **Investigate**: Provide tools to analyze security events

**How this maps to AWS**: AWS doesn't sell one product called "SIEM," but you can build the same capabilities from pieces:
- **Collect**: CloudTrail, VPC Flow Logs and CloudWatch Logs; optionally [Amazon Security Lake](https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html) to centralize them in a standard format
- **Correlate & Alert**: Security Hub aggregates findings; CloudWatch metric filters and alarms, and [Amazon EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html) rules, trigger notifications
- **Investigate**: CloudWatch Logs Insights, CloudTrail Lake, or Amazon Athena queries; Amazon OpenSearch Service for dashboards and search

### Alert Design Principles
- **High Signal-to-Noise Ratio**: Alerts should indicate real problems
- **Actionable**: Each alert should have a clear response procedure
- **Escalation**: Different severity levels with appropriate response times
- **Context**: Provide enough information to understand the issue

:::caution[Costs]
- **CloudTrail**: the 90-day event history is free, and your first trail's management events are free. Extra trails, data events and CloudTrail Lake cost money.
- **Security Hub, AWS Config, GuardDuty and Security Lake**: free trial periods (usually 30 days), then usage-based charges. Set a budget alert, and disable them when you finish the phase.
- **CloudWatch Logs**: charged per GB ingested and stored—set a log retention period instead of keeping logs forever.
:::

---

## 🧪 Test Your Knowledge

Use an AI assistant to test your understanding. Here are example prompts:

1. "Quiz me on the different types of logs I should monitor for security"
2. "Ask me about SIEM concepts and how they work together"
3. "Test my knowledge of creating effective security alerts"
4. "Quiz me on key security metrics for cloud applications"
5. "Ask me about the difference between logging and monitoring"
6. "Test my understanding of log correlation and analysis"
7. "Quiz me on common security monitoring mistakes"
8. "Ask me about incident response workflows for security events"
9. "Quiz me on what AWS CloudTrail, CloudWatch, AWS Config and Security Hub each do"

:::note[Other clouds (optional)]
Google Cloud's equivalents are [Cloud Logging](https://cloud.google.com/logging/docs) and Cloud Monitoring. This course uses AWS throughout.
:::

## Next Steps

Once you understand security monitoring concepts, move on to Topic 5.

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood the different types of security logs
- [ ] Learned SIEM concepts and how they work
- [ ] Understood alert design principles
- [ ] Learned key security metrics to track
- [ ] Reviewed AWS monitoring documentation (CloudTrail, CloudWatch, Config, Security Hub)
