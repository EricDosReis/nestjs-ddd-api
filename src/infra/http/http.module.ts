import { Module } from '@nestjs/common';

import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question';
import { GetRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/get-recent-questions';
import { DatabaseModule } from '../database/database.module';
import { AuthenticateController } from './controllers/authenticate.controller';
import { CreateAccountController } from './controllers/create-account.controller';
import { CreateQuestionController } from './controllers/create-question.controller';
import { GetRecentQuestionsController } from './controllers/get-recent-questions.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    GetRecentQuestionsController,
  ],
  providers: [CreateQuestionUseCase, GetRecentQuestionsUseCase],
})
export class HttpModule {}
