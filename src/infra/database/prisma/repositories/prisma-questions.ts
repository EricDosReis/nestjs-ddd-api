import { Injectable } from '@nestjs/common';

import type { Pagination } from '@/core/types/pagination';
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions';
import { Question } from '@/domain/forum/enterprise/entities/question';
import { PrismaQuestionMapper } from '../mappers/prisma-question';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(private prisma: PrismaService) {}

  async create(question: Question): Promise<void> {
    const data = PrismaQuestionMapper.toPersistence(question);

    await this.prisma.question.create({ data });
  }

  async save(question: Question): Promise<void> {
    const data = PrismaQuestionMapper.toPersistence(question);

    await this.prisma.question.update({
      where: {
        id: data.id,
      },
      data,
    });
  }

  async delete(question: Question): Promise<void> {
    const data = PrismaQuestionMapper.toPersistence(question);

    await this.prisma.question.delete({
      where: {
        id: data.id,
      },
    });
  }

  async findById(id: string): Promise<Question | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        id,
      },
    });

    if (!question) {
      return null;
    }

    return PrismaQuestionMapper.toDomain(question);
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        slug,
      },
    });

    if (!question) {
      return null;
    }

    return PrismaQuestionMapper.toDomain(question);
  }

  async findManyRecent({ page }: Pagination): Promise<Question[]> {
    const questions = await this.prisma.question.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
      skip: (page - 1) * 20,
    });

    return questions.map(PrismaQuestionMapper.toDomain);
  }
}
