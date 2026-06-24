import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

// Memory fallbacks in case DATABASE_URL is not set or Prisma fails to connect
class MemoryDb {
  private contacts: any[] = [];
  private subscribers: any[] = [];
  private applications: any[] = [];
  private prompts: any[] = [
    {
      id: "p1",
      title: "Data Extraction Prompt",
      category: "Data Analytics",
      promptText: "Extract all key metrics (sales, costs, user signup count) from the raw logs below. Return a clean JSON format.",
      model: "Claude 3.5 Sonnet",
      performanceScore: 94.5,
      createdAt: new Date(),
    },
    {
      id: "p2",
      title: "SQL Query Generator",
      category: "Coding",
      promptText: "Write a high-performance PostgreSQL query that joins users and order logs, filtering by monthly purchases.",
      model: "Gemini 1.5 Pro",
      performanceScore: 91.2,
      createdAt: new Date(),
    },
    {
      id: "p3",
      title: "AWS CDK Infrastructure Generator",
      category: "Cloud Solutions",
      promptText: "Generate an AWS CDK stack in TypeScript deploying an Amazon ECS Fargate service, API Gateway, and S3 Bucket.",
      model: "GPT-4o",
      performanceScore: 97.8,
      createdAt: new Date(),
    },
  ];

  async saveContact(data: { name: string; email: string; company?: string; inquiryType: string; message: string }) {
    const record = { id: `contact-${Date.now()}`, ...data, createdAt: new Date() };
    if (process.env.DATABASE_URL) {
      try {
        return await prisma.contactSubmission.create({ data });
      } catch (err) {
        console.warn("Prisma write failed, using memory DB:", err);
      }
    }
    this.contacts.push(record);
    return record;
  }

  async saveSubscriber(email: string) {
    const record = { id: `sub-${Date.now()}`, email, status: "active", createdAt: new Date() };
    if (process.env.DATABASE_URL) {
      try {
        return await prisma.newsletterSubscriber.create({ data: { email } });
      } catch (err) {
        console.warn("Prisma write failed, using memory DB:", err);
      }
    }
    if (!this.subscribers.some((s) => s.email === email)) {
      this.subscribers.push(record);
    }
    return record;
  }

  async saveApplication(data: { fullName: string; email: string; position: string; resumeUrl?: string; portfolioUrl?: string; coverLetter?: string }) {
    const record = { id: `app-${Date.now()}`, ...data, createdAt: new Date() };
    if (process.env.DATABASE_URL) {
      try {
        return await prisma.jobApplication.create({ data });
      } catch (err) {
        console.warn("Prisma write failed, using memory DB:", err);
      }
    }
    this.applications.push(record);
    return record;
  }

  async getPrompts() {
    if (process.env.DATABASE_URL) {
      try {
        return await prisma.promptTemplate.findMany();
      } catch (err) {
        console.warn("Prisma query failed, using memory DB:", err);
      }
    }
    return this.prompts;
  }

  async savePrompt(data: { title: string; category: string; promptText: string; model: string; performanceScore: number }) {
    const record = { id: `prompt-${Date.now()}`, ...data, createdAt: new Date() };
    if (process.env.DATABASE_URL) {
      try {
        return await prisma.promptTemplate.create({ data });
      } catch (err) {
        console.warn("Prisma write failed, using memory DB:", err);
      }
    }
    this.prompts.push(record);
    return record;
  }
}

export const memoryDb = new MemoryDb();
