import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrestationService } from "./prestation.service";
import { PrestationControllerBase } from "./base/prestation.controller.base";

@swagger.ApiTags("prestations")
@common.Controller("prestations")
export class PrestationController extends PrestationControllerBase {
  constructor(protected readonly service: PrestationService) {
    super(service);
  }
}
