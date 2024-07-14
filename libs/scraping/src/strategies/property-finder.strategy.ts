import { ScrapingStrategy } from './strategy.interface';
import * as cheerio from 'cheerio';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { Injectable, Logger } from '@nestjs/common';

export type Property = {
  title: string;
  description: string;
  price: number;
  address: string;
};

@Injectable()
export class PropertyFinderStrategy implements ScrapingStrategy {
  private readonly logger: Logger = new Logger(PropertyFinderStrategy.name);
  private readonly url: string =
    'https://www.property-finder.tld/for-sale.html';

  constructor(private readonly httpService: HttpService) {}

  async scrape(): Promise<Property[]> {
    return await this.cheerioProcessor();
  }

  private async cheerioProcessor() {
    const html = await this.getHtmlData();
    const $ = cheerio.load(html);

    const listings: Property[] = [];

    try {
      $('.listing').each((index, element) => {
        const title = $(element).find('.card__title').text().trim();
        const description = $(element).find('.card__description').text().trim();
        const price = parseFloat(
          $(element)
            .find('.card__price')
            .text()
            .replace(/[^\d.-]/g, ''),
        );
        const address = $(element).find('.card__location-text').text().trim();

        listings.push({ title, description, price, address });
      });
      return listings;
    } catch (error) {
      this.logger.error('Error while parsing the html', error);
      throw 'an error happened !';
    }
  }

  private async getHtmlData() {
    const { data } = await firstValueFrom(
      this.httpService.get<string>(this.url).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'an error happened !';
        }),
      ),
    );
    return data;
  }
}
