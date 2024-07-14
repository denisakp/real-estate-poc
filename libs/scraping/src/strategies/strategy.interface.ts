export interface ScrapingStrategy {
  scrape(): Promise<any>;
}
