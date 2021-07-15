import React from "react";
//react-native
import { Text, Image } from "react-native";

//native-base
import { List } from "native-base";

import { ProductItemTitle, ProductListItem, ProductItemPrice } from "./styles";

const ProductItem = ({ product, navigation }) => {
  return (
    <List.Item
      onPress={() =>
        navigation.navigate("ProductDetails", { product: product })
      }
    >
      <ProductListItem>
        <Image
          source={{ uri: product.image }}
          style={{ width: 130, height: 70, marginBottom: 10 }}
        />
        <ProductItemTitle>{product.name}</ProductItemTitle>
        <ProductItemPrice>
          {" "}
          {product.price} {"KD"}
        </ProductItemPrice>
      </ProductListItem>
    </List.Item>
  );
};

export default ProductItem;
