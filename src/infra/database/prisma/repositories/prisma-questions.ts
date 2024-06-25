import { Injectable } from '@nestjs/common';

import type { Pagination } from '@/core/types/pagination';
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions';
import { Question } from '@/domain/forum/enterprise/entities/question';
import { PrismaQuestionMapper } from '../mappers/prisma-question';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(private prisma: PrismaService) {}

  create(question: Question): Promise<void> {
    throw new Error('Method not implemented.');
  }

  save(question: Question): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(question: Question): Promise<void> {
    throw new Error('Method not implemented.');
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

  findBySlug(slug: string): Promise<Question | null> {
    throw new Error('Method not implemented.');
  }

  findManyRecent(pagination: Pagination): Promise<Question[]> {
    throw new Error('Method not implemented.');
  }
}
