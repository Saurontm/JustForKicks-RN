import React from "react";

//native-base
import { List, Text } from "native-base";

//Numeric Input
import NumericInput from "react-native-numeric-input";

import {
  ProductItemTitle,
  ProductListItem,
  ProductItemPrice,
  ProductDetailImage,
} from "./styles";
import { useState } from "react";
import cartStore from "../../stores/cartStore";
import { Button } from "native-base";
import { marginTop } from "styled-system";

const ProductItem = ({ product, navigation }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    cartStore.addToCart({ productId: product.id, quantity });
  };

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
        <NumericInput
          rounded
          totalHeight={45}
          initValue={quantity}
          minValue={1}
          onChange={setQuantity}
        />
        <Button
          onPress={handleAdd}
          style={{ backgroundColor: "rgba(52, 52, 52, 0)" }}
        >
          <Text>add</Text>
        </Button>
      </ProductListItem>
    </List.Item>
  );
};

export default ProductItem;
