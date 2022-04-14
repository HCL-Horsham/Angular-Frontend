import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OktaAuthService} from '@okta/okta-angular';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let oktaAuthSpy = jasmine.createSpyObj(OktaAuthService, ['']);
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [OktaAuthService],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create an instance', () => {

    expect(new LoginComponent(oktaAuthSpy)).toBeDefined();
})
});
