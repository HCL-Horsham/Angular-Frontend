import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CartItem } from '../common/cart-item';
import { Product } from '../common/product';
import { Purchase } from '../common/purchase';

import { CartService } from './cart.service';

describe('CartService', () => {
let cartService: CartService;
let mProduct: Product; 
let mCartItem: CartItem;

  beforeEach(() => {
    mProduct = jasmine.createSpyObj(Product, ['']);
    mCartItem = jasmine.createSpyObj( new CartItem(mProduct), ['']);

    TestBed.configureTestingModule({});
    cartService = TestBed.inject(CartService);
  });

  it('service created', () => {
    expect(cartService).toBeTruthy();
  });

  it('should be created', () =>{
    expect(cartService).toBeTruthy();
  })

  it('should add item to cart', () => {
    cartService.addToCart(mCartItem);
    expect(cartService.cartItems).toContain(mCartItem);
  })
});
