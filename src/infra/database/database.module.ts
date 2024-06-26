import { Module } from '@nestjs/common';

import { QuestionsRepository } from '@/domain/forum/application/repositories/questions';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments';
import { PrismaAnswerCommentsRepository } from './prisma/repositories/prisma-answer-comments';
import { PrismaAnswersRepository } from './prisma/repositories/prisma-answers';
import { PrismaQuestionAttachmentsRepository } from './prisma/repositories/prisma-question-attachments';
import { PrismaQuestionCommentsRepository } from './prisma/repositories/prisma-question-comments';
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions';

@Module({
  providers: [
    PrismaService,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    PrismaQuestionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
  ],
  exports: [
    PrismaService,
    QuestionsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
  ],
})
export class DatabaseModule {}
