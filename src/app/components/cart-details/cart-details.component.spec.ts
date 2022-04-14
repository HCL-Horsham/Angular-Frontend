import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from 'src/app/services/cart.service';

import { CartDetailsComponent } from './cart-details.component';

describe('CartDetailsComponent', () => {

  let cartServiceSpy = jasmine.createSpyObj(CartService, ['']);
 


  it('should create an instance', () => {

    expect(new CartDetailsComponent(cartServiceSpy)).toBeDefined();
})
});
