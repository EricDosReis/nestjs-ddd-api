import { Body, Controller, Post, UseGuards, UsePipes } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { z } from 'zod';

import { ZodValidationPipe } from 'src/pipes/zod-validation';
import { PrismaService } from 'src/prisma/prisma.service';

const createQuestionBodySchema = z.object({});

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>;

@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createQuestionBodySchema))
  async handle(@Body() body: CreateQuestionBodySchema) {}
}