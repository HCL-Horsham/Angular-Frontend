import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from 'src/app/services/cart.service';

import { CartStatusComponent } from './cart-status.component';

describe('CartStatusComponent', () => {
  let cartServiceSpy = jasmine.createSpyObj(CartService, ['']);
  let component: CartStatusComponent;
  let fixture: ComponentFixture<CartStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create an instance', () => {

    expect(new CartStatusComponent(cartServiceSpy)).toBeDefined();
})
});
