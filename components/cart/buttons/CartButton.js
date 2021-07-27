import React from "react";

//icon
import { CartButtonStyled } from "../styles";

//nav
import { useNavigation } from "@react-navigation/native";

import { observer } from "mobx-react";
import { Button, Text } from "native-base";
import cartStore from "../../../stores/cartStore";
import { Alert } from "react-native";

//stores
import authStore from "../../../stores/authStore";

const CartButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("CartList");
    } else {
      Alert.alert(
        "You must have an account",
        "You need to sign in to continue.",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          { text: "Sign in", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Button
      style={{ backgroundColor: "rgba(52, 52, 52, 0)" }}
      onPress={handlePress}
    >
      <CartButtonStyled name="shopping-cart" size={24} color="black" />
      <Text>{cartStore.totalQuantity}</Text>
    </Button>
  );
};

export default observer(CartButton);
