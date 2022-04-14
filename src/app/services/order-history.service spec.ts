import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { defer } from 'rxjs';
import { OrderHistory } from '../common/order-history';

import { OrderHistoryService } from './order-history.service';

describe('OrderHistoryService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: OrderHistoryService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new OrderHistoryService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
  it ('should return expected order-history based on email', (done: DoneFn) => {

    const testEmail: string = "anna.archut@hcl.com"

    const expectedOrderHistory: OrderHistory[] =
    [{ id: "17",
    orderTrackingNumber: "f0fff1f9-d239-4f00-96fe-ca76b85b806b",
    totalPrice: 125.00,
    totalQuantity: 1,
    dateCreated: new Date(2022-0o3-23) },
    {id: "9",
    orderTrackingNumber: "a7b02468-2168-476c-9837-a38d45d7a536",
    totalPrice: 135.00,
    totalQuantity: 3,
    dateCreated: new Date(2022-0o3-21) },
    {id: "7",
    orderTrackingNumber: "b9670cef-4848-47b7-a776-1ed8f64fa426",
    totalPrice: 120.00,
    totalQuantity: 3,
    dateCreated: new Date(2022-0o3-18) }];
    
  const outputData = {
    "_embedded": {
        "orders": [
            {
                "id": 17,
                "orderTrackingNumber": "f0fff1f9-d239-4f00-96fe-ca76b85b806b",
                "totalQuantity": 1,
                "totalPrice": 125.00,
                "dateCreated": "2022-03-23T19:54:32.843+00:00"  
                   
            },
            {
                "id": 9,
                "orderTrackingNumber": "a7b02468-2168-476c-9837-a38d45d7a536",
                "totalQuantity": 3,
                "totalPrice": 155.00,
                "dateCreated": "2022-03-21T15:10:03.271+00:00"},
                 
              
            {
                "id": 7,
                "orderTrackingNumber": "b9670cef-4848-47b7-a776-1ed8f64fa426",
                "totalQuantity": 3,
                "totalPrice": 120.00,
                "dateCreated": "2022-03-18T14:20:02.350+00:00"
            }
        ]
  }
  };
               
           

  httpClientSpy.get.and.returnValue(asyncData(expectedOrderHistory));

  service.getOrderHistory(testEmail).subscribe({
    next: OrderHistory => {
      expect(OrderHistory)
        .withContext('expected order history')
        .toEqual(OrderHistory);
      done();
    },
    error: done.fail
  });
  expect(httpClientSpy.get.calls.count())
    .withContext('one call')
    .toBe(1);
});

//it('should return an error when the server returns a 404', (done: DoneFn) => {
  /*const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });

  httpClientSpy.get.and.returnValue(asyncError(errorResponse));

  service.getOrderHistory().subscribe({
    next: heroes => done.fail('expected an error, not heroes'),
    error: error  => {
      expect(error.message).toContain('test 404 error');
      done();
    }
  });
});
*/
});
    function asyncData(expectedOrderHistory: OrderHistory[]): import("rxjs").Observable<unknown> {
        throw new Error('Function not implemented.');
    }

    function asyncError(errorResponse: HttpErrorResponse): import("rxjs").Observable<unknown> {
        throw new Error('Function not implemented.');
    }

   

