import { PaymentInfo } from "../common/payment-info";
import { Purchase } from "../common/purchase";
import { CheckoutService } from "./checkout.service";

describe('CheckoutService', () => {

  let HttpClientSpy = jasmine.createSpyObj(Purchase, ['']);
  let HttpClient2Spy = jasmine.createSpyObj(PaymentInfo, [''])


  it('should create an instance of purchase', () => {

      expect(new CheckoutService(HttpClientSpy)).toBeDefined();
  });

  it('should create an instance of payment intent', () => {

    expect(new CheckoutService(HttpClient2Spy)).toBeDefined();
})
})