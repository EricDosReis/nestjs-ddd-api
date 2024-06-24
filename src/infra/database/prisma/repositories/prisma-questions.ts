import { Injectable } from '@nestjs/common';

import type { Pagination } from '@/core/types/pagination';
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions';
import { Question } from '@/domain/forum/enterprise/entities/question';

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  create(question: Question): Promise<void> {
    throw new Error('Method not implemented.');
  }

  save(question: Question): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(question: Question): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<Question | null> {
    throw new Error('Method not implemented.');
  }

  findBySlug(slug: string): Promise<Question | null> {
    throw new Error('Method not implemented.');
  }

  findManyRecent(pagination: Pagination): Promise<Question[]> {
    throw new Error('Method not implemented.');
  }
}