---
title: "Topic 3: Network Security"
sidebar:
  order: 3
---

> ⏱️ **Estimated time:** 2-3 days

Network security in the cloud is about building secure connections, creating logical separations between resources, and defending against network-based threats. In the NIST CSF this supports the **Protect** function (*Platform and Infrastructure Security*). Before securing your Journal API's network, you need to understand AWS networking fundamentals.

---

## 📚 Learning Path

### Learning Objectives

By the end of this topic, you will understand:

- Virtual Private Clouds (VPCs) and network isolation
- Security Groups vs Network ACLs and when to use each
- Load balancers and secure traffic management
- VPN and private connectivity options
- Common network security mistakes and how to avoid them

## Core Learning Resources

### 1. Read: Cloud Networking Fundamentals
Start with the Amazon VPC documentation:

- [What is Amazon VPC?](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) - Read the sections on VPCs, subnets and route tables
- [Security groups](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html) - Firewalls attached to individual resources
- [Network ACLs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html) - Firewalls attached to whole subnets

### 2. Watch: Network Security in Action
- [AWS VPC Deep Dive](https://www.youtube.com/watch?v=fnxXNZdf6ew) (45 minutes)

### 3. Learn: Network Security Best Practices
- [AWS VPC Security Best Practices](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html)
- [NIST Network Security Guide](https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final)
- [Cloud Security Alliance Network Security](https://cloudsecurityalliance.org/research/working-groups/network-security/)

## Key Concepts to Master

### Virtual Private Clouds (VPCs)
- **Isolation**: Your own private network in the cloud
- **Subnets**: Divide your VPC into smaller network segments
- **Route Tables**: Control where network traffic can go
- **Internet Gateways**: Allow internet access where needed

### Security Groups vs Network ACLs

**Security Groups** (Stateful):
- Act like firewalls for individual instances
- Allow rules only (deny by default)
- Stateful (return traffic automatically allowed)
- Apply at the instance level

**Network ACLs** (Stateless):
- Act like firewalls for entire subnets
- Allow and deny rules
- Stateless (must explicitly allow return traffic)
- Apply at the subnet level

### Network Segmentation
- **Public Subnets**: For resources that need internet access (load balancers)
- **Private Subnets**: For application servers and databases
- **Isolated Subnets**: For highly sensitive resources with no internet access

### Private Connectivity
- **[VPC endpoints (AWS PrivateLink)](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html)**: Let resources in private subnets reach AWS services (like S3 or Secrets Manager) without going over the public internet. Gateway endpoints for S3 and DynamoDB are free; interface endpoints are billed per hour.
- **NAT Gateway**: Lets private resources make *outbound* internet requests without being reachable from the internet. Note: NAT Gateways cost money every hour they exist (tens of dollars per month), so delete them when you're done.
- **VPN**: [AWS Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) and [AWS Client VPN](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html) create encrypted tunnels into your VPC.

### Load Balancers and Traffic Management
- **Application Load Balancers**: Handle HTTP/HTTPS traffic with security features
- **Network Load Balancers**: Handle TCP/UDP traffic at high performance
- **Security Features**: TLS termination (with free certificates from AWS Certificate Manager), DDoS protection, access logging

### Additional AWS Network Protections
- **[AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html)** (Web Application Firewall): Filters malicious HTTP requests (such as SQL injection) in front of an Application Load Balancer, API Gateway or CloudFront. Billed per rule and per request.
- **[AWS Shield](https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html)**: DDoS (Distributed Denial of Service) protection. Shield Standard is automatic and free.
- **[AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html)**: A managed firewall for inspecting traffic across a whole VPC. Powerful but relatively expensive (billed per hour per endpoint)—read about it, but you don't need it for the capstone.
- **[VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html)**: Record which IP addresses talked to which, on which ports—useful evidence in Topic 4.

---

## 🧪 Test Your Knowledge

Use an AI assistant to test your understanding. Here are example prompts:

1. "Quiz me on the difference between Security Groups and Network ACLs"
2. "Ask me to explain VPC concepts like subnets and route tables"
3. "Test my knowledge of when to use public vs private subnets"
4. "Quiz me on load balancer types and their security features"
5. "Ask me about network segmentation best practices"
6. "Test my understanding of stateful vs stateless firewalls"
7. "Quiz me on VPN types and when to use them"
8. "Ask me about common network security mistakes in the cloud"
9. "Quiz me on when to use AWS WAF vs security groups vs AWS Network Firewall"

## Physical vs Cloud Network Security

Understanding the differences helps bridge the conceptual gap:

| Physical Network Components | AWS Equivalents | Key Differences |
|----------------------------|-------------------|-----------------|
| Physical routers and switches | Route tables, internet/NAT gateways | Software-defined networking via console/API |
| Hardware firewalls | Security Groups, NACLs, AWS Network Firewall, AWS WAF | Rules applied through AWS interfaces |
| Physical network segmentation | Subnets, VPCs, Security Groups | Logical boundaries replace physical ones |
| Network cables | Virtual connections, VPC peering, Transit Gateway | No physical connections to manage |

## Additional Resources (Optional)

### AWS Documentation
- [AWS VPC Security Best Practices](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html)
- [VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html)
- [AWS PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html)

### Network Security Tools
- [AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/)
- [AWS WAF, AWS Shield, and AWS Firewall Manager](https://docs.aws.amazon.com/waf/)

### Practice Resources
- [AWS Networking Workshop](https://catalog.workshops.aws/networking/en-US)

:::note[Other clouds (optional)]
Google Cloud's equivalent is also called a VPC; see [Google Cloud VPC overview](https://cloud.google.com/vpc/docs/vpc) if you're curious. This course uses AWS throughout.
:::

## Next Steps

Once you feel confident with network security concepts, move on to Topic 4. 

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood VPC and network isolation concepts
- [ ] Learned Security Groups vs Network ACLs
- [ ] Understood network segmentation (public/private/isolated)
- [ ] Learned about load balancers and traffic management
- [ ] Reviewed the Amazon VPC documentation
- [ ] (Optional) Completed VPC/networking workshops
