---
title: "Topic 2: Data Protection and Secrets Management"
sidebar:
  order: 2
---

> ⏱️ **Estimated time:** 2-3 days

Data is the most valuable asset in your cloud environment. In the NIST CSF this is the **Protect** function's *Data Security* category. Before you secure your Journal API's data, you need to understand encryption, key management, and secrets management fundamentals on AWS.

---

## 📚 Learning Path

### Learning Objectives

By the end of this topic, you will understand:

- Encryption at rest vs encryption in transit
- Symmetric vs asymmetric encryption
- Key management best practices
- Secrets management and why it matters
- Data classification and sensitivity levels
- Common data security mistakes and how to avoid them

## Core Learning Resources

### 1. Read: Encryption Fundamentals
Start with these foundational resources:

- [AWS KMS (Key Management Service) Concepts](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html) - How AWS creates, stores and controls encryption keys
- [What is AWS Secrets Manager?](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) - Store and rotate passwords and API keys
- [Protecting data with encryption in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html) - Encryption at rest and in transit for S3 (Simple Storage Service)

### 2. Watch: Data Protection in the Cloud
- [Encryption in the Cloud Explained](https://www.youtube.com/watch?v=plv7EnY5QSo) (20 minutes)
- [AWS KMS Deep Dive](https://www.youtube.com/watch?v=8Z0wsE2HoSo) (45 minutes)
- [Secrets Management Best Practices](https://www.youtube.com/watch?v=pK1h7Leh_yI) (30 minutes)

### 3. Learn: Data Security Best Practices
- [OWASP Top 10 for APIs](https://owasp.org/API-Security/editions/2023/en/0x11-t10/) - Focus on data exposure issues
- [NIST Cybersecurity Framework - Protect](https://www.nist.gov/cyberframework/protect)
- [AWS Well-Architected Security Pillar - Data protection](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/data-protection.html)

## Key Concepts to Master

### Encryption Types

**Encryption at Rest**:
- Protects data stored in databases, file systems, or object storage
- Uses symmetric encryption (same key for encrypt/decrypt)
- Managed by AWS automatically in many cases. For example, new S3 objects are encrypted by default, and you can turn on [EBS encryption by default](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html) for your EC2 disks and enable encryption on RDS databases when you create them

**Encryption in Transit**:
- Protects data moving between systems (API calls, database connections)
- Uses TLS (Transport Layer Security, the successor to SSL) protocols
- Essential for any web application. [AWS Certificate Manager (ACM)](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html) issues free public TLS certificates for use with load balancers and CloudFront

### Key Management

**Customer-Managed Keys vs AWS-Managed Keys**:
- **AWS-managed**: AWS handles all key operations for a service (easier, no extra key charge)
- **Customer-managed (in AWS KMS)**: You control key rotation and key policies (more control; each customer-managed key costs about $1/month plus request charges)

**Key Rotation**:
- Regularly changing encryption keys to limit exposure
- AWS KMS can rotate customer-managed keys automatically
- Critical for long-term security

### Secrets Management

**What Are Secrets**:
- Database passwords
- API keys
- Certificates
- OAuth tokens
- Any sensitive configuration data

**Why Secrets Management Matters**:
- Prevents hardcoding credentials in code
- Enables automatic rotation
- Provides audit trails of secret access (every read is logged in CloudTrail)
- Centralizes sensitive configuration

**Where to store secrets on AWS**:
- **[AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)**: Built for secrets, supports automatic rotation. Has a short free trial, then roughly $0.40 per secret per month plus API calls.
- **[Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)**: `SecureString` parameters are encrypted with KMS; standard parameters are free, which makes it a good budget option for learning.

### Preventing Accidental Exposure
One of the most common cloud data leaks is a storage bucket left open to the public. Keep [S3 Block Public Access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html) turned on at the account level unless you have a specific reason not to.

### Data Classification

**Public**: No risk if disclosed (marketing materials)
**Internal**: Low risk if disclosed (internal documentation)
**Confidential**: Moderate risk if disclosed (customer data)
**Restricted**: High risk if disclosed (payment information, personal data)

---

## 🧪 Test Your Knowledge

Use an AI assistant to test your understanding. Here are example prompts:

1. "Quiz me on the difference between encryption at rest and encryption in transit"
2. "Ask me to explain symmetric vs asymmetric encryption with examples"
3. "Test my knowledge of when to use customer-managed vs AWS-managed KMS keys"
4. "Quiz me on secrets management best practices"
5. "Ask me about data classification levels and how to apply them"
6. "Test my understanding of key rotation and why it's important"
7. "Quiz me on common data security mistakes in cloud applications"
8. "Ask me about the difference between hashing and encryption"
9. "Quiz me on when to use AWS Secrets Manager vs Systems Manager Parameter Store"

## Additional Resources (Optional)

### AWS Documentation
- [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/)
- [Amazon Macie](https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html) - Finds sensitive data (like personal information) in S3 buckets. Has a free trial, then charges per bucket and per GB scanned.
- [Amazon EBS encryption](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html)

### Security Tools and Services
- [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/)
- [AWS Key Management Service (KMS)](https://docs.aws.amazon.com/kms/)
- [AWS Certificate Manager (ACM)](https://docs.aws.amazon.com/acm/)
- [HashiCorp Vault](https://www.vaultproject.io/) (open source option)

### Practice Resources
- [CryptoHack](https://cryptohack.org/) - Learn cryptography through challenges
- [Over The Wire](https://overthewire.org/wargames/krypton/) - Cryptography wargames

## Next Steps

Once you feel confident with data protection concepts, move on to Topic 3. 

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood encryption at rest vs in transit
- [ ] Learned symmetric vs asymmetric encryption
- [ ] Understood key management best practices (AWS KMS)
- [ ] Learned secrets management fundamentals (Secrets Manager / Parameter Store)
- [ ] Understood data classification levels
- [ ] Reviewed AWS encryption documentation (KMS, S3, EBS)
