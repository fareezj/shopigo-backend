import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from 'src/cart/cart.service';
import { AddCartReqDto } from 'src/cart/dto/add-cart.req.dto';
import { DeleteCartReqDto } from 'src/cart/dto/delete-cart.req.dto';
import { updateCartQuantityReqDto } from 'src/cart/dto/update-cart-qty-req.dto';

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

  @Post('update-cart')
  updateCartQuantity(@Body() updateCartReqDto: updateCartQuantityReqDto) {
    return this.cartService.updateCartQuantity(updateCartReqDto);
  }

  @Post('delete-cart')
  deleteCart(@Body() reqBody: DeleteCartReqDto) {
    return this.cartService.deleteCartItem(reqBody);
  }
}
