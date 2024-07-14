import { Injectable } from '@nestjs/common';

import { ScrapingStrategy } from './strategies/strategy.interface';

@Injectable()
export class ScrapingContext {
  private strategy: ScrapingStrategy;

  setStrategy(strategy: ScrapingStrategy) {
    this.strategy = strategy;
  }

  async executeScraping() {
    await this.strategy.scrape();
  }
}
