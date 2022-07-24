import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from 'src/cart/cart.service';
import { AddCartReqDto } from 'src/cart/dto/add-cart.req.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add-cart')
  addCart(@Body() addCartReqDto: AddCartReqDto) {
    return this.cartService.addToCart(addCartReqDto);
  }

  @Get('get-cart/:userId')
  getCart(@Param('userId') userId: string) {
    return this.cartService.getCart(userId);
  }
}
