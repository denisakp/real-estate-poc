import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { EstatesModule } from './estates/estates.module';

@Module({
  imports: [AuthModule, UsersModule, BlogsModule, EstatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
