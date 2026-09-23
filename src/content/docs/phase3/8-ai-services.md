---
title: "Topic 8: Cloud AI Service Platforms"
sidebar:
  order: 8
---

> ⏱️ **Estimated time:** 3-4 days

Cloud providers offer comprehensive AI service platforms. On AWS, the main one is **Amazon Bedrock**, a service that gives you access to foundation models (large AI models from providers such as Anthropic, Amazon, Meta and Mistral) through a single API. In this topic, you'll learn about model options, deployment strategies, and operational features. Understanding these platforms helps you make informed architectural decisions when integrating AI into applications.

---

## 📚 Learning Path

- Study - Be sure to read additional relevant articles in respective documentation sections as necessary

### Platform Overview

[What is Amazon Bedrock?](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)

### About Models

[Supported foundation models in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html)

### Deployment

[Deploying a model from Amazon Bedrock Marketplace](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-marketplace-deploy-a-model.html). Note that most Bedrock models are "serverless": you don't deploy anything, you just enable access and call them, paying per token (roughly per word) processed.

### Safety & Guardrails

[Amazon Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)

### Platform Playgrounds

[Amazon Bedrock playgrounds](https://docs.aws.amazon.com/bedrock/latest/userguide/playgrounds.html)

> 💰 **Cost tip:** Bedrock charges per token, and model usage is generally not part of the Free Tier. Short playground experiments usually cost cents, but keep your AWS Budgets alert on and prefer smaller, cheaper models while experimenting.

> If you later want to try GCP, its comparable platform is Vertex AI. The concepts in this topic transfer directly.

---

## 🧪 Test Your Knowledge

Once you've reviewed Amazon Bedrock, test your understanding with these prompts:

1. What are some models that Amazon Bedrock offers? What are their key differences?
2. When would you choose a smaller, faster model vs. a larger, more capable model for your journal analysis use case?
3. How do guardrails and content filters work in Amazon Bedrock, and when would you use them?
4. What are the cost implications of your model choice and deployment strategy?
5. Describe the deployment options available in Amazon Bedrock (on-demand, provisioned throughput, Marketplace). How would you deploy a model for your journal application?
6. How would you test different models and prompts before deploying to production?

---

## 🛠️ Hands-on Task

Explore Amazon Bedrock and set up a model:

- Compare at least 2 different models in the Amazon Bedrock playground
- Test different prompts and observe how the models respond (quality, speed, cost differences)
- Analyze the available deployment options and their trade-offs
- Understand which model and deployment approach you'd choose for your journal application and why
- Enable access to (or deploy) a model that you will utilize for the capstone

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood what Amazon Bedrock offers
- [ ] Explored the available models in Amazon Bedrock
- [ ] Tested multiple models or prompts in the Bedrock playground
- [ ] Understood deployment options and their differences
- [ ] Reviewed safety/guardrail features
- [ ] Made an informed decision about which model to use for the capstone

---
