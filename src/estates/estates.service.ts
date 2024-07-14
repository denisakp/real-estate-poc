import { Injectable } from '@nestjs/common';
import { CreateEstateDto } from './dto/create-estate.dto';
import { EstateRepository } from './estate.repository';

@Injectable()
export class EstatesService {
  constructor(private readonly estateRepository: EstateRepository) {}

  async create(createEstateDto: CreateEstateDto) {
    return await this.estateRepository.create(createEstateDto);
  }

  async findAll() {
    return await this.estateRepository.find({});
  }

  async findOne(id: string) {
    return await this.estateRepository.findOne({ _id: id });
  }
}
