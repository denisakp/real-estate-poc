import { AbstractRepository } from '@app/database/abstracts';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class BlogRepository extends AbstractRepository<BlogDocument> {
  protected readonly logger: Logger = new Logger(BlogRepository.name);

  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<BlogDocument>,
    @InjectConnection() private readonly con: Connection,
  ) {
    super(blogModel, con);
  }
}
