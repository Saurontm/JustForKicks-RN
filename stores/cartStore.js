import { makeAutoObservable } from "mobx";

import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
  cartItems = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchItems = async () => {
    const cartItems = await AsyncStorage.getItem("cart");
    this.cartItems = cartItems ? JSON.parse(cartItems) : [];
  };

  addToCart = async (newItem) => {
    const foundItem = this.cartItems.find(
      (item) => item.productId === newItem.productId
    );

    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.cartItems.push(newItem);
    await AsyncStorage.setItem("cart", JSON.stringify(this.cartItems));
  };

  get totalQuantity() {
    let total = 0;
    this.cartItems.forEach((item) => (total += item.quantity));
    return total;
  }
}

const cartStore = new CartStore();
cartStore.fetchItems();
export default cartStore;
