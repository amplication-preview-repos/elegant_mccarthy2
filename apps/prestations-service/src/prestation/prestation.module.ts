import { Module } from "@nestjs/common";
import { PrestationModuleBase } from "./base/prestation.module.base";
import { PrestationService } from "./prestation.service";
import { PrestationController } from "./prestation.controller";

@Module({
  imports: [PrestationModuleBase],
  controllers: [PrestationController],
  providers: [PrestationService],
  exports: [PrestationService],
})
export class PrestationModule {}
