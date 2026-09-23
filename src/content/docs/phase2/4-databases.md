---
title: "Topic 4: Databases"
sidebar:
  order: 4
---

> ⏱️ **Estimated time:** 3-4 days

We will be using a database to store our application data. For this we need to first understand how databases work and how to interact with them.

---

## 📚 Learning Path

1. **Study SQL basics:** [Intro to SQL](https://www.khanacademy.org/computing/computer-programming/sql)

2. **Learn the two main kinds of AWS database:**

   On AWS you'll mostly meet two database services. You don't need to master both right now - just understand when each one fits.

   | AWS service | Type | Good for | Learn more |
   |-------------|------|----------|------------|
   | **Amazon DynamoDB** | NoSQL (key-value / document) | Simple, fast lookups; pay only for what you use; nothing to manage | [What is DynamoDB?](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html) · [DynamoDB Tutorial For Beginners](https://www.youtube.com/watch?v=2k2GINpO308) |
   | **Amazon RDS** | Relational (SQL) - e.g. PostgreSQL, MySQL | Data with relationships, tables, and SQL queries | [What is Amazon RDS?](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html) |

   **RDS** stands for *Relational Database Service*: AWS runs a normal SQL database (like PostgreSQL) for you and handles backups and patching. **NoSQL** means "not only SQL" - data is stored as items/documents instead of rows in related tables.

   > 💡 **Cost tip:** DynamoDB's on-demand mode costs next to nothing for small practice tables. An RDS database runs (and bills) every hour it's switched on, so delete it or stop it when you're not using it.

3. **Complete the Python quickstart:**
   - [AWS DynamoDB Python Quickstart](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_Scenario_GettingStartedMovies_section.html) - uses `boto3`, the AWS SDK (Software Development Kit) for Python, with the credentials you set up in Phase 1

---

## 🧪 Test Your Knowledge

Test your knowledge with an AI assistant using these prompts:

1. Can you ask me to explain what a database is and how it works?
2. Can you quiz me on the difference between SQL and NoSQL databases?
3. Can you ask me to explain the concept of CRUD operations in databases?
4. Can you ask me to explain how to connect to a database from a Python application?
5. Can you quiz me on how to perform CRUD operations in a database using Python?
6. Can you ask me to explain how to use an ORM (Object-Relational Mapping) library in Python?
7. Can you ask me to explain how to use a NoSQL database like DynamoDB?
8. Can you quiz me on how to model data in a NoSQL database like DynamoDB?

---

## ✅ Topic Checklist

Before moving on, make sure you can answer "yes" to these:

- [ ] I understand SQL basics and CRUD operations
- [ ] I understand the difference between SQL and NoSQL databases
- [ ] I completed the Python quickstart for my chosen cloud database
- [ ] I can connect to a database from Python