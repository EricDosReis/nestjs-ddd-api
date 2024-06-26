import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { z } from 'zod';

import { GetRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/get-recent-questions';
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation';
import { QuestionPresenter } from '../presenters/question';

const pageQueryParamSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1));

type PageQueryParamSchema = z.infer<typeof pageQueryParamSchema>;

@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
export class GetRecentQuestionsController {
  constructor(private getRecentQuestionsUseCase: GetRecentQuestionsUseCase) {}

  @Get()
  async handle(
    @Query('page', new ZodValidationPipe(pageQueryParamSchema))
    page: PageQueryParamSchema,
  ) {
    const result = await this.getRecentQuestionsUseCase.execute({ page });

    if (result.isFailure()) {
      throw new Error();
    }

    const { questions } = result.value;

    return { questions: questions.map(QuestionPresenter.toHTTP) };
  }
}
