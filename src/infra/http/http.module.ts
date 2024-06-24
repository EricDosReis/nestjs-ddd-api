import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { AuthenticateController } from './controllers/authenticate.controller';
import { CreateAccountController } from './controllers/create-account.controller';
import { CreateQuestionController } from './controllers/create-question.controller';
import { GetRecentQuestionsController } from './controllers/get-recent-questions.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AuthenticateController,
    CreateAccountController,
    CreateQuestionController,
    GetRecentQuestionsController,
  ],
})
export class HttpModule {}