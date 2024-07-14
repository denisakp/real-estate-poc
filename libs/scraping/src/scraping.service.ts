import { Injectable, Logger } from '@nestjs/common';
import { ScrapingContext } from './scraping.context';
import { PropertyFinderStrategy } from './strategies/property-finder.strategy';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ScrapingService {
  private readonly logger = new Logger(ScrapingService.name);

  constructor(
    private readonly context: ScrapingContext,
    private propertyFinderStrategy: PropertyFinderStrategy,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_1AM) // the cron job will run every day at 1AM
  async scrapeData() {
    // set strategy to property finder
    this.context.setStrategy(this.propertyFinderStrategy);

    // execute scraping
    await this.context.executeScraping();
  }
}
