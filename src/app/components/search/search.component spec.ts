import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [Router]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  let productDetailsSpy = jasmine.createSpyObj(ProductDetailsComponent, ['']);

    it('should create an instance', () => {

        expect(new SearchComponent(productDetailsSpy)).toBeDefined();
    })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
