import { Injectable } from '@nestjs/common';

import type { Pagination } from '@/core/types/pagination';
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments';
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment';

@Injectable()
export class PrismaAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  create(answer: AnswerComment): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(answerCommentId: string): Promise<AnswerComment | null> {
    throw new Error('Method not implemented.');
  }

  delete(answer: AnswerComment): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findManyByAnswerId(
    questionId: string,
    pagination: Pagination,
  ): Promise<AnswerComment[]> {
    throw new Error('Method not implemented.');
  }
}
