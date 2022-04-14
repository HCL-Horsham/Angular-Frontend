import { TestBed } from '@angular/core/testing';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthInterceptorService } from './auth-interceptor.service';

describe('AuthInterceptorService', () => {
  
  let oktaAuthSpy = jasmine.createSpyObj(OktaAuthService, ['']);

  it('should create an instance', () => {

    expect(new AuthInterceptorService(oktaAuthSpy)).toBeDefined();
})

  

  
});
