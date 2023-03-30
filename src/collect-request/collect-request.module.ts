import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { Request } from 'src/models/request.model';
import { Subcription } from 'src/models/subcriptions.model';
import { UserModule } from 'src/user/user.module';
import { CollectRequestController } from './collect-request.controller';
import { CollectRequestService } from './collect-request.service';

@Module({
  controllers: [CollectRequestController],
  providers: [CollectRequestService],
  exports: [CollectRequestService],
  imports: [
    SequelizeModule.forFeature([Request, Subcription]),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
  ],
})
export class CollectRequestModule {}
