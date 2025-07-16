/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello():{message:string} {
    return { message: 'hello from backend Service' };
  }
}
