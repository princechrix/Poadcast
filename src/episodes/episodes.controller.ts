import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return 'All Episodes';
  }

  @Get('featured')
  findFeatured() {
    return 'featured episodes';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id); 
    return 'One Episode ' + id;
  }

  @Post()
  create(@Body() input: any) {
    console.log(input);
    return 'new Episode';
  }
}
