import React from "react";

//native-base
import { List } from "native-base";

import {
  ProductItemTitle,
  ProductListItem,
  ProductItemPrice,
  ProductDetailImage,
} from "./styles";

const ProductItem = ({ product, navigation }) => {
  return (
    <List.Item
      onPress={() =>
        navigation.navigate("ProductDetails", { product: product })
      }
    >
      <ProductListItem>
        <ProductDetailImage source={{ uri: product.image }} />
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
