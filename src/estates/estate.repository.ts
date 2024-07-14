import { AbstractRepository } from '@app/database/abstracts';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Estate, EstateDocument } from './schemas/estate.schema';

@Injectable()
export class EstateRepository extends AbstractRepository<EstateDocument> {
  protected readonly logger: Logger = new Logger(EstateRepository.name);

  constructor(
    @InjectModel(Estate.name) private readonly m: Model<EstateDocument>,
    @InjectConnection() private readonly c: Connection,
  ) {
    super(m, c);
  }
}
