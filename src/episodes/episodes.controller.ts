import { Controller, Get, Post } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll() {
    return 'All Episodes';
  }

  @Post()
  create() {
    return 'new Episode';
  }
}
