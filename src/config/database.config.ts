import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseOptionsFactory } from '@nestjs/mongoose';

@Injectable()
export class DatabaseConfig implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions() {
    const dbUsername = this.configService.get('DB_USERNAME');
    const dbPassword = this.configService.get('DB_PASSWORD');

    return {
      uri: `mongodb+srv://${dbUsername}:${dbPassword}@shopigo.akx3t.mongodb.net/shopigo-db?retryWrites=true&w=majority`,
    };
  }
}
