import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHello(): string {
    this.logger.log('Returning Hello World! - esse é um log normal');
    this.logger.error('Returning Hello World! - esse é um log de error');
    this.logger.warn('Returning Hello World! - esse é um log de warn');
    this.logger.debug('Returning Hello World! - esse é um log de debug');
    this.logger.verbose('Returning Hello World! - esse é um log verbose');
    this.logger.fatal('Returning Hello World! - esse é um log fatal');
    return 'Hello World!';
  }
}
