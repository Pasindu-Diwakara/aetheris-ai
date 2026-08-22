"use server";

import { PrismaClient } from '../generated/prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
import { revalidatePath } from 'next/cache';

const libsql = createClient({
  url: 'file:./dev.db',
});
const adapter = new PrismaLibSql(libsql);
const prisma = new PrismaClient({ adapter });

export async function savePromptAction(
  title: string,
  category: string,
  rawText: string,
  optimizedText: string
) {
  // Use the dummy user we seeded
  const user = await prisma.user.findUnique({
    where: { email: 'test@example.com' },
  });

  if (!user) {
    throw new Error('User not found. Run seed script first.');
  }

  const prompt = await prisma.prompt.create({
    data: {
      title,
      category,
      originalText: rawText,
      optimizedText,
      userId: user.id,
    },
  });

  revalidatePath('/library');
  return prompt;
}

export async function getPromptsAction(search?: string) {
  const prompts = await prisma.prompt.findMany({
    where: search
      ? {
          OR: [
            { title: { contains: search } },
            { category: { contains: search } },
            { optimizedText: { contains: search } },
          ],
        }
      : undefined,
    orderBy: { createdAt: 'desc' },
  });

  return prompts;
}
