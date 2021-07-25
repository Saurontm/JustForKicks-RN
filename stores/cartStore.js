import { makeAutoObservable } from "mobx";

class CartStore {
  cartItems = [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 5,
      quantity: 2,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const cartStore = new CartStore();
export default cartStore;
