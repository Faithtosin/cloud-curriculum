---
title: "Topic 4: Container Orchestration - Kubernetes"
sidebar:
  order: 4
---

> ⏱️ **Estimated time:** 4-5 days

So we learned about Containers in the start of this phase, now let's see how we can orchestrate the containers. This is where Kubernetes comes in, often abbreviated as K8s, an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It is widely used in modern cloud-native environments to ensure applications are highly available, scalable, and resilient.

---

## 📚 Learning Path

### Why Kubernetes?

As applications grow in complexity, managing containers manually becomes challenging. Kubernetes provides:

- **Automated Deployment and Scaling**: Automatically deploy and scale containers based on resource usage or custom metrics.
- **Self-Healing**: Restarts failed containers, replaces unresponsive ones, and reschedules containers on healthy nodes.
- **Load Balancing**: Distributes traffic across containers to ensure high availability.
- **Service Discovery**: Automatically assigns DNS names and IPs to services.
- **Declarative Configuration**: Uses YAML or JSON manifests to define the desired state of your application.

## Core Concepts

Understanding Kubernetes requires familiarity with its core components:

### 1. **Cluster**
A Kubernetes cluster consists of:
- **Master Node**: Manages the cluster and schedules workloads.
- **Worker Nodes**: Run the containerized applications.

### 2. **Pods**
- The smallest deployable unit in Kubernetes.
- A pod can contain one or more containers that share storage, networking, and a single IP address.

### 3. **Services**
- Expose your application to the network.
- Types of services include:
  - **ClusterIP**: Internal access within the cluster.
  - **NodePort**: Exposes the service on a specific port of each node.
  - **LoadBalancer**: Integrates with cloud providers to expose the service externally.

### 4. **Deployments**
- Declaratively manage the desired state of your application.
- Handles rolling updates, rollbacks, and scaling.

### 5. **ConfigMaps and Secrets**
- **ConfigMaps**: Store configuration data as key-value pairs.
- **Secrets**: Store sensitive data like passwords and API keys securely.

## Setting Up Kubernetes

### 1. **Local Setup**
For local development, you can use tools like:
- [Minikube](https://minikube.sigs.k8s.io/docs/): Runs a single-node Kubernetes cluster locally.
- [Kind](https://kind.sigs.k8s.io/): Runs Kubernetes clusters in Docker containers.

### 2. **Running Containers on AWS**
AWS gives you two main ways to run containers in the cloud:

- **[Amazon ECS (Elastic Container Service)](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html) with [AWS Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html)**: AWS's own container orchestrator. With Fargate you don't manage any servers - you describe your container (a *task definition*) and AWS runs it. It is simpler than Kubernetes and the best first step for beginners who just want their container running in the cloud.
- **[Amazon EKS (Elastic Kubernetes Service)](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)**: managed Kubernetes. AWS runs the Kubernetes control plane (the "master" part of the cluster) for you, and you run your workloads on worker nodes (EC2 instances or Fargate). Everything you learn with Minikube or Kind applies here, because it's standard Kubernetes.

Not sure which to pick? Start with ECS on Fargate, then try EKS once you are comfortable with Kubernetes. The [Containers on AWS](https://aws.amazon.com/containers/) overview compares the options. Other clouds have similar managed Kubernetes offerings (for example Google Kubernetes Engine), but this course uses AWS.

:::caution[EKS is not free]
The EKS control plane is billed per hour for every cluster, even when nothing is running on it, and it is **not** covered by the AWS Free Tier. Worker nodes, load balancers and NAT gateways cost extra. Check [Amazon EKS pricing](https://aws.amazon.com/eks/pricing/), practise on Minikube or Kind first, and if you try EKS, delete the cluster (for example with `eksctl delete cluster`) as soon as you're done. Setting up an AWS Budget alert beforehand is a good safety net.
:::

To try EKS, follow the [Getting started with Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html) guide, which uses `eksctl` (a command-line tool that creates a cluster for you) or the AWS Management Console.

## Basic Commands

Here are some essential Kubernetes commands:

```bash
# View cluster information
kubectl cluster-info

# List all nodes in the cluster
kubectl get nodes

# Deploy an application
kubectl apply -f deployment.yaml

# View running pods
kubectl get pods

# View logs of a pod
kubectl logs <pod-name>

# Delete a resource
kubectl delete -f deployment.yaml
```

---

## 🛠️ Hands-On Exercise

1. Install Minikube or Kind on your local machine.
2. Create a simple Kubernetes deployment using the following YAML file:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
```

3. Apply the deployment:
`kubectl apply -f deployment.yaml`

4. Verify the pods are running:
`kubectl get pods`

5. Expose the deployment as a service:
`kubectl expose deployment nginx-deployment --type=NodePort --port=80`

6. Access the application in your browser using the NodePort.

---

## 🧪 Test Your Knowledge

Use these questions to test your understanding of Kubernetes concepts:

1. What is Kubernetes, and why is it used in modern application development?
2. What are the key components of a Kubernetes cluster?
3. What is a pod in Kubernetes, and how does it differ from a container?
4. How do Kubernetes services enable communication between pods and external clients?
5. What is the purpose of a Deployment in Kubernetes?
6. How does Kubernetes handle self-healing for applications?
7. What are ConfigMaps and Secrets, and how are they used in Kubernetes?
8. What is the difference between `kubectl apply` and `kubectl create`?
9. How can you scale a deployment in Kubernetes?
10. What are the benefits of using a managed Kubernetes service like Amazon EKS, and when would Amazon ECS on Fargate be a simpler choice?

These questions will help reinforce your understanding of Kubernetes and its core concepts.

## Additional Resources

- [Kubernetes Official Documentation](https://kubernetes.io/docs/concepts/)
- [Kubernetes the Hard Way by Kelsey Hightower](https://github.com/kelseyhightower/kubernetes-the-hard-way)
- [Amazon EKS User Guide](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
- [Amazon ECS Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood Kubernetes core concepts (Pods, Services, Deployments)
- [ ] Installed Minikube or Kind locally
- [ ] Created and deployed a Kubernetes deployment
- [ ] Exposed a deployment as a service
- [ ] Used kubectl commands for cluster management
- [ ] Understood ConfigMaps and Secrets
- [ ] (Optional) Explored Amazon EKS (and deleted the cluster afterwards) or deployed a container to Amazon ECS on Fargate