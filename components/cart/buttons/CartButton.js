import React from "react";

//icon
import { CartButtonStyled } from "../styles";

//nav
import { useNavigation } from "@react-navigation/native";

import { observer } from "mobx-react";
import { Button, Text } from "native-base";
import cartStore from "../../../stores/cartStore";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      style={{ backgroundColor: "rgba(52, 52, 52, 0)" }}
      onPress={() => navigation.navigate("CartList")}
    >
      <CartButtonStyled name="shopping-cart" size={24} color="black" />
      <Text>{cartStore.totalQuantity}</Text>
    </Button>
  );
};

export default observer(CartButton);
