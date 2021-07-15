import React from "react";
//react-native
import { Image } from "react-native";
//native-base
import { List } from "native-base";

//styles
import { BrandItemStyled, BrandItemImage, BrandItemQuantity } from "./styles";
const BrandItem = ({ brand, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("BrandDetails", { brand: brand })}
    >
      <BrandItemImage
        source={{ uri: brand.image }}
        style={{ width: 120, height: 100 }}
      />
      <BrandItemStyled>
        {brand.name}
        <BrandItemQuantity>
          {" ("}
          {brand.products.length}
          {")"}
        </BrandItemQuantity>
      </BrandItemStyled>
    </List.Item>
  );
};

export default BrandItem;
