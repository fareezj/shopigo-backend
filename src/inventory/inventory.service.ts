import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInventoryReqDto } from 'src/inventory/dto/create-inventory-req.dto';
import { CreateInventoryResDto } from 'src/inventory/dto/create-inventory.res.dto';
import { GetInventoryResDto } from 'src/inventory/dto/get-inventory.res.dto';
import { InventoryModel } from 'src/inventory/schema/inventory.schema';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(InventoryModel.name)
    private inventoryModel: Model<InventoryModel>,
  ) {}

  async createInventory(createInventoryReqDto: CreateInventoryReqDto) {
    try {
      const existingInventory: InventoryModel =
        await this.inventoryModel.findOne({
          id: createInventoryReqDto.id,
        });

      if (!existingInventory) {
        throw new HttpException(
          {
            statusCode: 409,
            message: 'Product already exists',
          },
          409,
        );
      }

      await this.inventoryModel.create(createInventoryReqDto);

      const result: CreateInventoryResDto = {
        statusCode: 201,
        message: 'Product Successfully Created',
        id: createInventoryReqDto.id,
      };
      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getInventory(productId: string) {
    try {
      const inventory: InventoryModel = await this.inventoryModel.findOne({
        id: productId,
      });

      if (!inventory) {
        throw new HttpException(
          {
            statusCode: 404,
            message: 'Product not found',
          },
          404,
        );
      }

      const inventoryResult: GetInventoryResDto = {
        statusCode: 200,
        message: 'Product Successfully Queried',
        result: inventory,
      };
      return inventoryResult;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllInventory() {
    try {
      const inventory = await this.inventoryModel.find({});
      if (!inventory) {
        throw new HttpException(
          {
            statusCode: 404,
            message: 'Product not found',
          },
          404,
        );
      }
      const inventoryResult = {
        statusCode: 200,
        message: 'Product Successfully Queried',
        result: inventory,
      };
      return inventoryResult;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
