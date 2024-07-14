import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogRepository } from './blog.repository';

@Injectable()
export class BlogsService {
  constructor(private readonly blogRepository: BlogRepository) {}

  async create(createBlogDto: CreateBlogDto) {
    return this.blogRepository.create(createBlogDto);
  }

  async findAll() {
    return await this.blogRepository.find({});
  }

  async findOne(id: string) {
    return await this.blogRepository.findOne({ _id: id });
  }
}
