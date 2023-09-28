/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PrestationService } from "../prestation.service";
import { PrestationCreateInput } from "./PrestationCreateInput";
import { PrestationWhereInput } from "./PrestationWhereInput";
import { PrestationWhereUniqueInput } from "./PrestationWhereUniqueInput";
import { PrestationFindManyArgs } from "./PrestationFindManyArgs";
import { PrestationUpdateInput } from "./PrestationUpdateInput";
import { Prestation } from "./Prestation";

export class PrestationControllerBase {
  constructor(protected readonly service: PrestationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Prestation })
  async create(
    @common.Body() data: PrestationCreateInput
  ): Promise<Prestation> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Prestation] })
  @ApiNestedQuery(PrestationFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Prestation[]> {
    const args = plainToClass(PrestationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Prestation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: PrestationWhereUniqueInput
  ): Promise<Prestation | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Prestation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: PrestationWhereUniqueInput,
    @common.Body() data: PrestationUpdateInput
  ): Promise<Prestation | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Prestation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: PrestationWhereUniqueInput
  ): Promise<Prestation | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
