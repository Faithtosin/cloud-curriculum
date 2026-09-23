---
title: "Topic 5: Generative AI APIs"
sidebar:
  order: 5
---

> ⏱️ **Estimated time:** 4-5 days

Generative AI and Large Language Models (LLMs) are transforming how we build applications. In this topic, you'll learn how to integrate LLM APIs into your Python applications. These skills are essential for modern cloud engineering as AI services are becoming core components of cloud platforms.

---

## 📚 Learning Path

### Understanding LLM API Basics

Before coding, understand these core concepts:

1. **Messages format**: LLMs work with conversation-style inputs
   - System message: Sets behavior/personality
   - User message: Your prompt/question
   - Assistant message: The AI response

2. **Completions**: The API generates text based on your input

3. **Parameters**:
   - `temperature`: Controls randomness (0 = deterministic, 1 = creative)
   - `max_tokens`: Limits response length
   - `model`: Which LLM version to use

4. **Structured outputs**: Getting JSON instead of free text

## Hands-On Learning: Python OpenAI Demos

Before setting up cloud resources, start with this free hands-on practice using GitHub Models:

**Resource:** [Python OpenAI Demos](https://aka.ms/python-openai-demos) ([Video Walkthrough](https://www.youtube.com/watch?v=_daw48A-RZI))

This repository teaches you the OpenAI Python SDK through progressively complex examples—the most widely used style of LLM API. The ideas you learn here (messages, temperature, structured outputs, function calling) carry straight over to Amazon Bedrock later in this topic. You can run it **completely free** using GitHub Models in GitHub Codespaces.

**Action:** Work through these examples in order:

1. **Chat Completions** - Start with `chat.py`, then try `chat_stream.py` and `chat_history.py`
2. **Structured Outputs** - Learn to get JSON responses with `structured_outputs_basic.py`
3. **Function Calling** - See how LLMs can call your code with `function_calling_basic.py`

**Why start here?**
- ✅ Free (uses GitHub Models, no credit card needed)
- ✅ Works in browser (GitHub Codespaces)
- ✅ Teaches concepts you'll reuse with Amazon Bedrock
- ✅ Builds skills progressively

### Video Series: Python + AI

For deeper learning, check out these videos from the **Python + AI livestream series** ([All Resources](https://aka.ms/pythonai/resources)):

| Topic | Slides | Video |
|-------|--------|-------|
| LLMs | [Slides](https://aka.ms/pythonai/slides/llms) | [Watch](https://aka.ms/PythonAI107-f) |
| Structured Outputs | [Slides](https://aka.ms/pythonai/slides/structuredoutputs) | [Watch](https://aka.ms/PythonAI1015-f) |

> **Optional:** The full series covers 9 topics including RAG, AI Agents, and more. Watch them all if you want a deep understanding of Python + AI.

## Your Cloud AI Service: Amazon Bedrock

Once you've completed the demos above, apply your skills to AWS's AI service, **Amazon Bedrock**. Bedrock gives you access to many different LLMs (from Amazon, Anthropic, Meta, Mistral and others) through one AWS API. Using it teaches you real cloud skills like IAM permissions, regions, and billing.

- Study: [What is Amazon Bedrock?](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)

> ⚠️ **Bedrock is not free.** You pay per **token** (a token is a chunk of text, roughly ¾ of a word) for both what you send and what you get back. The amounts for this phase are small (see *Cost Awareness* below), but check [Amazon Bedrock pricing](https://aws.amazon.com/bedrock/pricing/) and make sure the budget alert from Phase 1 is set up.

> ℹ️ **Other clouds:** Google Cloud's equivalent is Vertex AI. You don't need it for this course.

## Provider Playground Practice

**IMPORTANT:** Test in the playground BEFORE writing code.

### Amazon Bedrock
1. **Pick a region** (for example `us-east-1`, N. Virginia) in the top-right of the AWS Console and use the same one everywhere. Not every model is available in every region.
2. **Enable model access.** In the Bedrock console, open **Model access** and make sure the model you want to use is enabled for your account. Some model providers (for example Anthropic) ask you to fill in a short use-case form the first time.
   - Action: [Access Amazon Bedrock foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html)
   - Tip: start with a small, cheap model (such as Amazon Nova Micro or Nova Lite, or a small Claude or Llama model).
3. **Try the playground.**
   - Study: [Getting started with Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html)
   - Action: [Use the Amazon Bedrock playgrounds](https://docs.aws.amazon.com/bedrock/latest/userguide/playgrounds.html)

## Playground Exercises

In the Amazon Bedrock chat playground, test these prompts:

1. **Simple completion**: 
   ```
   Analyze the sentiment of this text: "I learned so much about Python today!"
   ```

2. **Structured output**:
   ```
   Analyze the sentiment of this journal entry and respond in JSON format with fields: sentiment (positive/negative/neutral) and summary (2 sentences max).
   
   Journal entry: "Today I struggled with async Python but finally got it working after 3 hours."
   ```

3. **System message test**: Add a system message:
   ```
   System: You are a helpful learning coach who analyzes student journal entries.
   User: Analyze this entry: "I'm frustrated with databases but making progress."
   ```

Take screenshots of successful responses. You'll replicate these in code next.

## Python SDK Integration

Now implement the same prompts in Python.

### Amazon Bedrock with boto3 (Converse API)

You'll use **boto3**, the AWS SDK (Software Development Kit) for Python, and Bedrock's **Converse API** - one consistent way to talk to any chat model on Bedrock.

- Install: `pip install boto3`
- Study: [Carry out a conversation with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html)
- Reference: [boto3 `converse` documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/bedrock-runtime/client/converse.html)

**No API key needed:** boto3 automatically uses the AWS credentials you set up with the AWS CLI in Phase 1 (`aws sso login` or `aws configure`). Your IAM user or role needs permission to call Bedrock (for example the `bedrock:InvokeModel` action).

Here's a minimal example that sends a system message and a user message and prints the reply:

```python
import os

import boto3

# Read settings from environment variables, with sensible defaults.
REGION = os.environ.get("AWS_REGION", "us-east-1")
# Copy the exact model ID (or "inference profile" ID) from the Bedrock console.
# Some models, such as this one, must be called through an inference profile
# whose ID starts with a region prefix like "us.".
MODEL_ID = os.environ.get("BEDROCK_MODEL_ID", "us.amazon.nova-micro-v1:0")

client = boto3.client("bedrock-runtime", region_name=REGION)

response = client.converse(
    modelId=MODEL_ID,
    system=[{"text": "You are a helpful learning coach who analyzes student journal entries."}],
    messages=[
        {
            "role": "user",
            "content": [{"text": 'Analyze this entry: "I\'m frustrated with databases but making progress."'}],
        }
    ],
    inferenceConfig={"maxTokens": 300, "temperature": 0.2},
)

# The reply text lives inside output -> message -> content.
print(response["output"]["message"]["content"][0]["text"])

# How many tokens you used (this is what you pay for).
print(response["usage"])  # {'inputTokens': ..., 'outputTokens': ..., 'totalTokens': ...}
```

To continue a conversation, append the assistant's reply (`response["output"]["message"]`) and your next user message to the `messages` list and call `converse` again.

Errors come back as `botocore.exceptions.ClientError`. Common ones for beginners:

```python
from botocore.exceptions import ClientError

try:
    response = client.converse(modelId=MODEL_ID, messages=[{"role": "user", "content": [{"text": "Hello!"}]}])
except ClientError as err:
    code = err.response["Error"]["Code"]
    if code == "AccessDeniedException":
        print("No access: check model access in the Bedrock console and your IAM permissions.")
    elif code == "ThrottlingException":
        print("Too many requests: wait a moment and retry.")
    else:
        raise
```

> ℹ️ **Other clouds:** On Google Cloud you'd use the Vertex AI SDK instead. Not needed for this course.

## Key Concepts to Learn

Work through the Bedrock and boto3 documentation and ensure you understand:

1. **Authentication**: How boto3 finds your AWS credentials (IAM users/roles and IAM Identity Center sign-in), and how that differs from the API keys used by providers like OpenAI
2. **Making requests**: Sending messages to the LLM
3. **Handling responses**: Parsing the completion text
4. **Error handling**: Rate limits, timeouts, invalid requests
5. **Environment variables**: Keeping settings (region, model ID) and any secrets out of your code (NEVER commit keys or credentials to git!)
6. **Async support**: Using async/await with LLM APIs (boto3 itself is synchronous; in an async app like FastAPI you can run it in a thread, e.g. with `asyncio.to_thread`)

## Practice Exercise

Create a simple Python script `llm_test.py` that:

1. Uses your AWS credentials from the AWS CLI setup and reads the region and model ID from environment variables (no secrets hard-coded)
2. Sends a journal entry text to a model on Amazon Bedrock using the Converse API
3. Requests sentiment analysis (positive/negative/neutral)
4. Requests a 2-sentence summary
5. Prints the results in a clean format

Example journal entry to test:
```
"Today I learned about FastAPI and built my first endpoint. The automatic documentation is amazing! I struggled a bit with async functions but the official tutorial helped. Tomorrow I'll tackle database integration."
```

## Cost Awareness

LLM APIs are pay-per-use. Typical costs for this phase:
- ~$0.50 - $3.00 for testing and completing the capstone
- Tokens are charged for both input (prompt) and output (response)
- Longer prompts = higher cost
- Larger models (for example Claude Sonnet or Nova Pro) = higher cost than smaller models (for example Claude Haiku or Nova Micro)
- On Bedrock, the `usage` field in every response tells you exactly how many tokens you were billed for
- Check your spend in the AWS Billing console and keep your budget alert switched on

**Tip:** Use smaller, faster models for development and testing. Switch to larger models only when needed.

---

## 🧪 Test Your Knowledge

Once you are done with the tutorials, test your knowledge with an AI assistant. Here are some example prompts:

1. Can you explain what an LLM API is and how it differs from a traditional REST API?
2. Can you explain the role of system messages, user messages, and assistant messages?
3. Can you quiz me on what the temperature parameter controls in LLM APIs?
4. Can you explain how to securely store API keys in a Python application?
5. Can you ask me to explain the difference between synchronous and asynchronous LLM API calls?
6. Can you quiz me on how to handle errors and rate limits when calling LLM APIs?
7. Can you explain how to get structured JSON output from an LLM instead of plain text?

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Completed the Python OpenAI Demos exercises
- [ ] Enabled model access and tested prompts in the Amazon Bedrock playground
- [ ] Understood the messages format (system, user, assistant)
- [ ] Practiced with structured outputs (JSON responses)
- [ ] Created a Python script that calls an LLM API (Amazon Bedrock Converse API via boto3)
- [ ] Kept credentials and API keys out of my code (AWS CLI credentials, environment variables)
- [ ] Understood cost awareness and token pricing