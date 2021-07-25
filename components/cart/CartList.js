import React from "react";
import { Spinner, List } from "native-base";

//stores
import cartStore from "../../stores/cartStore";
import productStore from "../../stores/productStore";

//components
import CartItem from "./CartItem";

//observer
import { Observer, observer } from "mobx-react";

const CartList = () => {
  if (productStore.loading) return <Spinner />;
  const cartList = cartStore.cartItems
    .map((item) => ({
      ...productStore.getProductById(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return <List>{cartList}</List>;
};

export default observer(CartList);
