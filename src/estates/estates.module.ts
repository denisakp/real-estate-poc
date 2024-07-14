import { Module } from '@nestjs/common';
import { EstatesService } from './estates.service';
import { EstatesController } from './estates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Estate, EstateSchema } from './schemas/estate.schema';
import { EstateRepository } from './estate.repository';

@Module({
  controllers: [EstatesController],
  providers: [EstatesService],
  imports: [
    MongooseModule.forFeature([{ name: Estate.name, schema: EstateSchema }]),
  ],
  exports: [EstatesService, EstateRepository],
})
export class EstatesModule {}
