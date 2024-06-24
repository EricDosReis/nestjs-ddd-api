import { Injectable } from '@nestjs/common';

import type { Pagination } from '@/core/types/pagination';
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments';
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment';

@Injectable()
export class PrismaQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  create(questionComment: QuestionComment): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(questionCommentId: string): Promise<QuestionComment | null> {
    throw new Error('Method not implemented.');
  }

  delete(question: QuestionComment): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findManyByQuestionId(
    questionId: string,
    pagination: Pagination,
  ): Promise<QuestionComment[]> {
    throw new Error('Method not implemented.');
  }
}
