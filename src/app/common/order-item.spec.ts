import { CartItem } from "./cart-item";
import { OrderItem } from "./order-item";

describe('OrderItem', () => {

    let cartItemSpy = jasmine.createSpyObj(CartItem, ['']);

    it('should create an instance', () => {

        expect(new OrderItem(cartItemSpy)).toBeDefined();
    })
})
