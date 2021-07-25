import React from "react";

//icon
import { Feather } from "@expo/vector-icons";
import { CartButtonStyled } from "../styles";
//nav
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <CartButtonStyled
      name="shopping-cart"
      size={24}
      color="black"
      onPress={() => navigation.navigate("CartList")}
    />
  );
};

export default CartButton;
