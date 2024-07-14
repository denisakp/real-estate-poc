import { Module } from '@nestjs/common';
import { ScrapingService } from './scraping.service';
import { ScrapingContext } from './scraping.context';
import { PropertyFinderStrategy } from './strategies/property-finder.strategy';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  providers: [ScrapingService, ScrapingContext, PropertyFinderStrategy],
  imports: [ScheduleModule.forRoot()],
  exports: [ScrapingService],
})
export class ScrapingModule {}
