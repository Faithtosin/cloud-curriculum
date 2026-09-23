---
title: "Topic 6: DevOps Capstone Project"
sidebar:
  order: 6
---

> ⏱️ **Estimated time:** 1 week

Now that you've learned the fundamentals of DevOps, it's time to apply these practices to the Journal API app you built in Phase 2 and deployed in Phase 3. In this capstone, you'll containerize the app, automate its deployment, manage infrastructure as code, set up monitoring and observability, and orchestrate containers with Kubernetes—demonstrating your end-to-end DevOps skills.

---

## 📚 Learning Path

### Capstone Steps

1. **Containerize the Application**

    - Write a `Dockerfile` for your FastAPI app.
    - Build and run the container locally to verify it works.
    - Ensure LLM API credentials are passed via environment variables (not baked into the image).
    - Push your image to a private repository in Amazon ECR (Elastic Container Registry).

2. **Infrastructure as Code**

    - Use Terraform (or another IaC tool) to define and provision:
        - Compute resources (Amazon ECS on Fargate is the simplest; Amazon EKS if you want Kubernetes in the cloud)
        - Networking (VPC, subnets, security groups)
        - Database (PostgreSQL on Amazon RDS, as in previous phases)
        - The ECR repository and the IAM role your pipeline will use
    - Store your IaC code in version control, and keep Terraform state in an S3 backend.

3. **CI/CD Pipeline**

    - Set up a CI/CD pipeline with GitHub Actions to:
        - Build and test your app on every commit
        - Build and push your Docker image to Amazon ECR
        - Deploy your app automatically to AWS (for example, update your ECS service or apply your Kubernetes manifests to EKS)
    - Authenticate the pipeline to AWS with OIDC and an IAM role - do not store long-lived AWS access keys in GitHub.

4. **Container Orchestration with Kubernetes**

    - Write Kubernetes manifests (`Deployment`, `Service`, `ConfigMap`/`Secret`) for your app and database.
    - Store your LLM API key in a Kubernetes `Secret` and mount it as an environment variable.
    - Deploy your app and database to a local Kubernetes cluster (Minikube/Kind) or to Amazon EKS. Remember the EKS control plane is billed hourly and isn't in the Free Tier, so delete the cluster when you're done.
    - Expose your FastAPI app using a Kubernetes `Service` (NodePort or LoadBalancer).
    - (Optional) Use Helm to package and deploy your app.

5. **Monitoring & Observability**

    - Deploy Prometheus and Grafana (using Docker or Kubernetes manifests).
    - Instrument your FastAPI app to expose metrics (e.g., using `prometheus_client` for Python).
    - Track LLM API calls: latency, error rate, and token usage for the `/analyze` endpoint.
    - Configure Prometheus to scrape your app's metrics endpoint.
    - Create a Grafana dashboard to visualize key metrics (e.g., request count, error rate, latency, LLM API performance).
    - Send your container logs to Amazon CloudWatch Logs (ECS and EKS can both do this) and create at least one CloudWatch alarm.

6. **Clean Up**

    - When you've captured your screenshots, run `terraform destroy` and delete any EKS cluster, load balancers, RDS databases and unused ECR images so you don't keep paying for them.

7. **Documentation**

    - Document your setup and deployment process in a `README.md`.
    - Include diagrams or screenshots of your CI/CD pipeline, Kubernetes setup, and monitoring dashboards.

---

## Example Project Structure

```
/journal-app
  /infra                # Terraform or IaC configs
  /k8s                  # Kubernetes manifests (deployment, service, etc.)
  /app                  # FastAPI app code
  Dockerfile
  .github/workflows/    # CI/CD pipeline configs
  README.md
```

---

## Testing & Validation

- Make a code change and push to your repo—verify the pipeline builds, tests, and deploys the app.
- Access your deployed app and confirm it works with the database.
- Visit Grafana and confirm you see live metrics from your app.
- Use `kubectl` to verify your app and database are running in the cluster.

---

## Skills Checklist

- [ ] Dockerfile and containerization
- [ ] Infrastructure as Code (Terraform with the AWS provider)
- [ ] CI/CD pipeline setup (GitHub Actions deploying to AWS via OIDC)
- [ ] Kubernetes manifests and deployment
- [ ] Monitoring and observability (Prometheus + Grafana)
- [ ] Documentation

---

## Next Steps

Once you’ve completed this capstone, you’ll have demonstrated practical DevOps skills by taking an app from code to production with automation, infrastructure as code, container orchestration, and monitoring. This gives you a strong project under your portfolio to showcase for job applications and talk during interviews!