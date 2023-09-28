import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrestationServiceBase } from "./base/prestation.service.base";

@Injectable()
export class PrestationService extends PrestationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
