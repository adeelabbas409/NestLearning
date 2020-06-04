import {
  Controller,
  Get,
  Req,
  Res,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CatsService } from './cats.service';
import { CatsCreateDto } from './catsCreate.dto';
import { Cats } from './../interfaces/cat.interface';
@Controller('cats')
export class CatsController {
  //   @Get()
  //   findAll(@Req() request: Request): string {
  //     return 'all cats here';
  //   }

  constructor(private catService: CatsService) {}

  @Post()
  async create(@Body() catDto: CatsCreateDto) {
    this.catService.create(catDto);
  }

  @Get()
  async findAll(): Promise<Cats[]> {
    return this.catService.findAll();
  }

  @Get()
  findAll2(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  @Post()
  createD(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }
}
