import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Product } from '../common/product';
import { ProductService } from './product.service';



describe('ProductService', () => {
let productService: ProductService;
let mProduct: Product; 




  beforeEach(() => {
    mProduct = jasmine.createSpyObj(Product, ['']);
    
   

    TestBed.configureTestingModule({});
    productService = TestBed.inject(ProductService);
  });

  it('service created', () => {
    expect(productService).toBeTruthy();
  });

  it('should be created', () =>{
    expect(productService).toBeTruthy();
  })


});


