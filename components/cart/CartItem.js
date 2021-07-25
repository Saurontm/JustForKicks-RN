import React from "react";

import { List } from "native-base";
import { Text } from "react-native";
import { TotalPrice } from "./styles";

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>
        {item.quantity} x {item.name}
      </Text>
      <Text> {item.price} KD</Text>
      <TotalPrice> {item.price * item.quantity} KD</TotalPrice>
    </List.Item>
  );
};

export default CartItem;
