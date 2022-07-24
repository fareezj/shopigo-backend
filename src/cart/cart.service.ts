import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddCartReqDto } from 'src/cart/dto/add-cart.req.dto';
import { CartModel } from 'src/cart/schema/cart.schema';
import { InventoryModel } from 'src/inventory/schema/inventory.schema';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(CartModel.name) private cartModel: Model<CartModel>,
    @InjectModel(InventoryModel.name)
    private inventoryModel: Model<InventoryModel>,
  ) {}

  async addToCart(addCartReqDto: AddCartReqDto) {
    const reqBody: AddCartReqDto = addCartReqDto;
    try {
      // Check product existence
      const product = await this.inventoryModel.findOne({
        id: reqBody.productId,
      });

      if (!product) {
        throw new HttpException(
          {
            statusCode: 404,
            message: 'Product not found',
          },
          409,
        );
      }

      const addCartProduct = {
        productId: reqBody.productId,
        userId: reqBody.userId,
        quantity: reqBody.quantity,
        basePrice: product.productPrice,
        totalPrice: product.productPrice * reqBody.quantity,
      };
      return await this.cartModel.create(addCartProduct);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getCart(userId: string) {
    try {
      const response = await this.cartModel.find({ userId: userId });
      return response;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
