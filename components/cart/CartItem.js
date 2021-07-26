import React from "react";

import { List } from "native-base";
import { Text } from "react-native";
import { TotalPrice, TrashIcon } from "./styles";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>
        {item.quantity} x {item.name}
      </Text>
      <Text> {item.price} KD</Text>
      <TotalPrice> {item.price * item.quantity} KD</TotalPrice>
      <TrashIcon
        name="trash"
        size={24}
        onPress={() => cartStore.deleteFromCart(item.id)}
      />
    </List.Item>
  );
};

export default CartItem;
