import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { AuthenticateController } from './controllers/authenticate.controller';
import { CreateAccountController } from './controllers/create-account.controller';
import { CreateQuestionController } from './controllers/create-question.controller';
import { GetRecentQuestionsController } from './controllers/get-recent-questions.controller';

@Module({
  controllers: [
    AuthenticateController,
    CreateAccountController,
    CreateQuestionController,
    GetRecentQuestionsController,
  ],
  providers: [PrismaService],
})
export class HttpModule {}
