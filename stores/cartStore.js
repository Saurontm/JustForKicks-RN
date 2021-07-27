import { makeAutoObservable } from "mobx";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";

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

  deleteFromCart = async (itemId) => {
    this.cartItems = this.cartItems.filter((item) => item.productId !== itemId);
    await AsyncStorage.setItem("cart", JSON.stringify(this.cartItems));
  };

  checkout = async () => {
    try {
      await instance.post("/checkout", this.cartItems);
      this.cartItems = [];
      await AsyncStorage.removeItem("cart");
      alert("You have great taste!");
    } catch (error) {
      console.error("checkout: ", error.response.data);
    }
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
