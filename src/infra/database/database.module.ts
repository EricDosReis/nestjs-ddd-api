import { Module } from '@nestjs/common';
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
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository,
    PrismaQuestionsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
  ],
  exports: [
    PrismaService,
    PrismaAnswersRepository,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository,
    PrismaQuestionsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
  ],
})
export class DatabaseModule {}
