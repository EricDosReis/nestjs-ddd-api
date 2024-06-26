import { Injectable } from '@nestjs/common';

import type { Either } from '@/core/error-handling/either';
import { success } from '@/core/error-handling/success';
import type { Question } from '../../enterprise/entities/question';
import { QuestionsRepository } from '../repositories/questions';

interface GetRecentQuestionsUseCaseArguments {
  page: number;
}

type GetRecentQuestionsUseCaseResponse = Either<
  null,
  {
    questions: Question[];
  }
>;

@Injectable()
export class GetRecentQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: GetRecentQuestionsUseCaseArguments): Promise<GetRecentQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page });

    return success({ questions });
  }
}
