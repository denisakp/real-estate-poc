import { AbstractSchema } from './abstract.schema';
import { Logger, NotFoundException } from '@nestjs/common';
import { Connection, FilterQuery, Model, SaveOptions, Types } from 'mongoose';

export abstract class AbstractRepository<TDocument extends AbstractSchema> {
  protected abstract readonly logger: Logger;

  protected constructor(
    protected readonly model: Model<TDocument>,
    private readonly connection: Connection,
  ) {}

  async create(
    document: Omit<TDocument, any>,
    options?: SaveOptions,
  ): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });

    return createdDocument.save(options);
  }

  async find(filterQuery: FilterQuery<TDocument>) {
    return this.model.find(filterQuery, {}, { lean: true }).exec();
  }

  async findOne(filterQuery: FilterQuery<TDocument>) {
    const document = await this.model
      .findOne(filterQuery, {}, { lean: true })
      .exec();

    if (!document) {
      this.logger.warn(`Document with filterQuery ${filterQuery} not found`);
      throw new NotFoundException();
    }

    return document;
  }
}
