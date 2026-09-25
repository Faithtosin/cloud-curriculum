---
title: "Topic 6: Secure Your Journal API - Capstone"
sidebar:
  order: 6
---

> ⏱️ **Estimated time:** 1 week

Now it's time to implement everything you've learned! This capstone project will transform your Journal API from a basic application into a production-ready, enterprise-grade secure system. You'll apply all the concepts from Topics 1-5 in a cohesive, real-world implementation.

---

## 📚 Learning Path

### Project Overview

You'll implement comprehensive security for your Journal API by building five layers of protection:

1. **IAM Security**: Identity and access controls (Topic 1)
2. **Data Protection**: Encryption and secrets management (Topic 2)  
3. **Network Security**: Secure connectivity and isolation (Topic 3)
4. **Security Monitoring**: Real-time detection and alerting (Topic 4)
5. **Incident Response**: Automated threat response (Topic 5)

**Don't have the Journal API?** Use any web application you have (Flask app, Node.js app, WordPress, or even a static site). The security principles apply to any cloud application.

## What You'll Build

By the end of this capstone, your application will have:

- **Zero hardcoded secrets** - All credentials managed securely
- **Encrypted everything** - Data protected at rest and in transit
- **Network isolation** - Application components properly segmented
- **Real-time monitoring** - Security events detected within minutes
- **Automated responses** - Common threats handled automatically
- **Complete audit trail** - Every action logged and trackable
- **Incident playbooks** - Clear procedures for security events

This represents the security standard expected in production environments.

## Pre-Implementation Setup

Before you start, ensure you have:

1. **Your application running** - Journal API deployed and accessible on AWS
2. **Administrative access** - Administrator permissions in your AWS account (through IAM Identity Center or an admin role, not the root user)
3. **Cost monitoring** - Set up [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) alerts (target: under $50/month)
4. **Documentation template** - Create folders for your security documentation

:::caution[Free trials end]
This capstone turns on services such as Amazon GuardDuty, AWS Security Hub, AWS Config and Amazon Inspector. Each has a free trial (typically 30 days) and then charges by usage. NAT Gateways, interface VPC endpoints, AWS WAF and KMS customer-managed keys also bill while they exist. Keep a list of everything you enable and follow the **Clean Up** section at the end.
:::

## Part 1: Foundation Security (IAM & Network)

### 1.1: Implement Identity and Access Management

**Create your IAM strategy:**
- Design an IAM role for your Journal API application (an EC2 instance profile, ECS task role or Lambda execution role—AWS's version of a "service account")
- Create IAM roles following least privilege principle
- Set up MFA for your root user and your administrative sign-in (IAM Identity Center or IAM user)
- Create an access matrix documenting who can access what

**Implementation checklist:**
- [ ] Journal API IAM role created with minimal permissions (no long-lived access keys in the app)
- [ ] Database access role separate from API role  
- [ ] Separate role for monitoring and security tools
- [ ] Administrative access requires MFA; root user has MFA and no access keys
- [ ] (Optional) Permission boundary applied to the application role
- [ ] IAM Access Analyzer enabled and findings reviewed
- [ ] All access documented in IAM matrix

**Test your IAM:**
- Try accessing resources with the wrong service account (should fail)
- Verify your application works with the new restricted permissions
- Test MFA requirement for administrative access

### 1.2: Secure Your Network Architecture

**Design your network security:**
- Create VPC with public and private subnets
- Place your API in private subnet, load balancer in public
- Configure security groups with minimum required access
- Keep your database (for example Amazon RDS) in a private subnet, and use VPC endpoints so the app can reach AWS services like Secrets Manager and S3 privately

**Implementation checklist:**
- [ ] VPC created with proper CIDR blocks (the IP address ranges, e.g. `10.0.0.0/16`)
- [ ] Public subnet for load balancer only
- [ ] Private subnet for application and database
- [ ] Security groups allow only necessary ports (e.g. database security group only accepts traffic from the app's security group)
- [ ] Database accessible only from application subnet
- [ ] Internet access through NAT Gateway (if needed—remember it bills hourly)
- [ ] (Optional) AWS WAF attached to the Application Load Balancer
- [ ] VPC Flow Logs enabled

**Test your network:**
- Verify your API is not directly accessible from internet
- Confirm database cannot be reached from public subnet
- Test that your application can still function properly

## Part 2: Data Protection & Monitoring

### 2.1: Implement Data Protection

**Secure your data:**
- Enable encryption at rest for database and file storage (RDS encryption, EBS encryption by default, S3 default encryption) using AWS KMS keys
- Configure TLS for all API communications
- Move all secrets to AWS Secrets Manager (or Systems Manager Parameter Store `SecureString` parameters on a tight budget)
- Set up automated encrypted backups

**Implementation checklist:**
- [ ] Database encryption enabled (RDS storage encrypted with KMS)
- [ ] File storage encryption enabled (S3 and EBS)
- [ ] S3 Block Public Access turned on at the account level
- [ ] TLS certificate configured (free certificate from AWS Certificate Manager on your load balancer, or Let's Encrypt)
- [ ] API keys moved to secrets manager
- [ ] LLM API key (OpenAI, Anthropic, etc.) stored in secrets manager
- [ ] Database passwords in secrets manager
- [ ] Automated daily backups configured (RDS automated backups or AWS Backup)
- [ ] Backup encryption verified

**Test your data protection:**
- Verify HTTPS is working (check certificate in browser)
- Confirm secrets are no longer in code or config files
- Test application works with secrets from secrets manager
- Attempt to access backups and verify they're encrypted

### 2.2: Deploy Security Monitoring

**Set up your monitoring stack:**
- Configure audit logging for all services
- Deploy security monitoring dashboard
- Create alerts for suspicious activities
- Set up log aggregation and analysis

**Implementation checklist:**
- [ ] CloudTrail trail enabled for all regions, sending logs to an S3 bucket (and optionally CloudWatch Logs)
- [ ] Security dashboard deployed (CloudWatch dashboard and/or AWS Security Hub)
- [ ] Failed console sign-in alerts configured (CloudWatch metric filter + alarm, or EventBridge rule, sending to an SNS email topic)
- [ ] Unusual API access pattern alerts set up
- [ ] Database access monitoring enabled
- [ ] Security group change alerts (EventBridge rule on `AuthorizeSecurityGroupIngress` and similar CloudTrail events)
- [ ] Resource modification notifications (AWS Config rules)

**Test your monitoring:**
- Generate a failed login attempt (confirm alert fires)
- Make an unusual API call pattern (verify detection)
- Modify a security group (check notification received)
- Review logs to ensure all activities are captured

## Part 3: Advanced Security & Response

### 3.1: Implement Threat Detection

**Build automated threat detection:**
- Enable Amazon GuardDuty (threat detection) and Amazon Inspector (vulnerability scanning), and send their findings to AWS Security Hub
- Configure behavioral analysis for your application
- Set up threat intelligence feeds (GuardDuty includes AWS-managed threat intelligence; you can add your own IP lists)
- Create threat detection rules specific to your application

**Implementation checklist:**
- [ ] Amazon GuardDuty enabled (note the trial end date)
- [ ] AWS Security Hub enabled with the AWS Foundational Security Best Practices standard
- [ ] Behavioral baselines established for normal API usage
- [ ] Threat intelligence integration configured
- [ ] Custom detection rules for your application patterns
- [ ] Integration with your monitoring dashboard

### 3.2: Create Incident Response System

**Build automated response capabilities:**
- Create incident response workflows
- Implement automated remediation for common threats (EventBridge rules that trigger Lambda functions or SNS notifications)
- Build runbooks for manual response procedures
- Set up incident communication channels

**Implementation checklist:**
- [ ] Automated response to compromised credentials (e.g. Lambda deactivates an exposed IAM access key)
- [ ] Automatic isolation of suspicious network activity (e.g. Lambda moves a flagged EC2 instance into a "quarantine" security group)
- [ ] Incident escalation workflows defined
- [ ] Runbooks created for each incident type
- [ ] Communication plan for security incidents
- [ ] Regular testing schedule for incident procedures

## Part 4: Validation & Documentation

### 4.1: Security Testing

**Test all your security controls:**

**Authentication Testing:**
- Attempt API access without proper credentials
- Try to access admin functions without authorization
- Test MFA bypass attempts

**Network Security Testing:**
- Attempt direct database connections from internet
- Try to access application servers directly
- Test security group rule enforcement

**Data Protection Testing:**
- Verify encryption at rest is working
- Confirm TLS/SSL is properly configured
- Test secrets management integration

**Monitoring Testing:**
- Generate security events and verify alerts
- Test incident response automation
- Validate log collection and analysis

### 4.2: Create Security Documentation

**Document your complete security implementation:**

**Architecture Documentation:**
- Security architecture diagram showing all controls
- Network topology with security zones marked
- Data flow diagrams showing encryption points
- IAM structure and access paths

**Operational Documentation:**
- Incident response runbooks for each threat type
- Security monitoring dashboard user guide
- Backup and recovery procedures
- Security configuration management process

**Compliance Documentation:**
- Security control matrix
- Risk assessment and mitigation strategies
- Audit trail and logging procedures
- Cost analysis of security implementation

## Clean Up

When you've captured your evidence and documentation, avoid surprise charges:

- Disable GuardDuty, Security Hub, Inspector, Detective and AWS Config recording if you won't keep using them
- Delete NAT Gateways, interface VPC endpoints, load balancers, AWS WAF web ACLs and any EC2/RDS resources you no longer need
- Schedule deletion of KMS customer-managed keys you created for practice, and delete practice secrets
- Keep one CloudTrail trail (the first one is free for management events) and your AWS Budgets alerts
- Check the Billing console's **Bills** page a few days later to confirm charges have stopped

## Success Criteria

Your capstone is complete when you can demonstrate:

- ✅ **Zero secrets in code** - All credentials managed through secrets service
- ✅ **Network isolation working** - Database not accessible from internet
- ✅ **Encryption everywhere** - Data protected at rest and in transit
- ✅ **Monitoring functional** - Security events detected within 5 minutes
- ✅ **Automated responses** - Common threats handled without manual intervention
- ✅ **Complete documentation** - Others can understand and replicate your setup
- ✅ **Cost under control** - Monthly costs stay under $50 using free tiers
- ✅ **Testing validated** - All security controls proven to work

## Deliverables

Submit the following:

1. **Security Architecture Diagram** - Visual representation of all security controls
2. **Implementation Guide** - Step-by-step documentation of what you built
3. **Incident Response Runbooks** - Procedures for handling security events
4. **Test Results** - Evidence that your security controls work as designed
5. **Cost Analysis** - Monthly cost breakdown of your security implementation
6. **Lessons Learned** - Reflection on challenges and solutions

## Project Outcomes

After completing this capstone, you'll have:

- **Production-Ready Security** - Your application meets enterprise security standards
- **Hands-On Experience** - Practical implementation of security controls used in industry
- **Complete Portfolio Project** - Comprehensive security implementation to showcase to employers
- **Incident Response Skills** - Ability to detect, respond to, and recover from security events
- **Security Documentation** - Professional-grade documentation and procedures

## Next Steps

This capstone demonstrates your ability to implement comprehensive cloud security. You now have the skills to:

- **Secure any cloud application** using enterprise-grade controls
- **Implement security monitoring** that detects threats in real-time
- **Create incident response procedures** that minimize business impact

---

## ✅ Topic Checklist

Before completing, make sure you have:

- [ ] Designed and implemented IAM strategy with least privilege
- [ ] Secured network architecture with public/private subnets
- [ ] Enabled encryption at rest and in transit
- [ ] Moved all secrets to a secrets management service
- [ ] Deployed security monitoring dashboard
- [ ] Created alerts for suspicious activities
- [ ] Implemented threat detection service
- [ ] Created incident response runbooks
- [ ] Tested all security controls
- [ ] Created security documentation and diagrams
- [ ] Completed cost analysis
- [ ] Disabled paid services and deleted resources you no longer need