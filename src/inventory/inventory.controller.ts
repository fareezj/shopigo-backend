import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateInventoryReqDto } from 'src/inventory/dto/create-inventory-req.dto';
import { InventoryService } from 'src/inventory/inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post('create-product')
  createProduct(@Body() createInventoryReqDto: CreateInventoryReqDto) {
    return this.inventoryService.createInventory(createInventoryReqDto);
  }

  @Get('get-product')
  async getAllProduct() {
    return await this.inventoryService.getAllInventory();
  }

  @Get('get-product/:productId')
  async getProduct(@Param('productId') productId: string) {
    return await this.inventoryService.getInventory(productId);
  }
}
