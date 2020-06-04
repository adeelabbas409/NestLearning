import { Injectable } from '@nestjs/common';
import { Cats } from '../interfaces/cat.interface';
@Injectable()
export class CatsService {
  private cat: Cats[] = [];

  create(cat: Cats) {
    this.cat.push(cat);
  }

  findAll(): Cats[] {
    return this.cat;
  }
}
