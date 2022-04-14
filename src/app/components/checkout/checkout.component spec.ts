import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Luv2ShopFormService } from 'src/app/services/luv2-shop-form.service';

import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let formBuilderSpy = jasmine.createSpyObj(FormBuilder, ['']);
  let luv2ShopFormServiceSpy = jasmine.createSpyObj(Luv2ShopFormService, ['']);
  let cartServiceSpy = jasmine.createSpyObj(CartService, ['']);
  let checkoutServiceSpy = jasmine.createSpyObj(CheckoutService, ['']);
  let routerSpy = jasmine.createSpyObj(Router, [''] )
  

  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      providers:[ FormBuilder, HttpClient, Router],
      imports: [HttpClientTestingModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  it('should create an instance', () => 

  expect(new CheckoutComponent(formBuilderSpy,luv2ShopFormServiceSpy,cartServiceSpy, checkoutServiceSpy, routerSpy )).toBeDefined());
});




