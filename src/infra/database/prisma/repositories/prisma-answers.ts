import { Injectable } from '@nestjs/common';

import type { Pagination } from '@/core/types/pagination';
import { AnswersRepository } from '@/domain/forum/application/repositories/answers';
import { Answer } from '@/domain/forum/enterprise/entities/answer';

@Injectable()
export class PrismaAnswersRepository implements AnswersRepository {
  create(answer: Answer): Promise<void> {
    throw new Error('Method not implemented.');
  }

  save(answer: Answer): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(answer: Answer): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<Answer | null> {
    throw new Error('Method not implemented.');
  }

  findManyByQuestionId(
    questionId: string,
    pagination: Pagination,
  ): Promise<Answer[]> {
    throw new Error('Method not implemented.');
  }
}
