import React from "react";
//react-native
import { Image } from "react-native";
//native-base
import { List } from "native-base";

//styles
import { BrandItemStyled } from "./styles";
const BrandItem = ({ brand, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("BrandDetails", { brand: brand })}
    >
      <Image
        source={{ uri: brand.image }}
        style={{ width: 120, height: 100 }}
      />
      <BrandItemStyled>{brand.name}</BrandItemStyled>
    </List.Item>
  );
};

export default BrandItem;
