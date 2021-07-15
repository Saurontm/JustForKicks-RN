import React from "react";
import { Text } from "native-base";
//stores
import brandStore from "../../stores/brandStore";
import productStore from "../../stores/productStore";

//observer
import { observer } from "mobx-react";
import ProductList from "../product/ProductList";

//styles
import {
  ProductDetailTitle,
  ProductDetailImage,
  ProductDetailWrapper,
  ProductDetailDetails,
  ProductDetailPrice,
} from "./styles";

//native-base
import { Spinner } from "native-base";

const ProductDetails = ({ navigation, route }) => {
  const { product } = route.params;
  if (productStore.loading) return <Spinner />;
  //   const products = brand.products.map((product) =>
  //     productStore.getProductById(product.id)
  //   );
  return (
    <>
      <ProductDetailWrapper>
        <ProductDetailImage source={{ uri: product.image }} />
        <ProductDetailTitle>{product.name}</ProductDetailTitle>
        <ProductDetailDetails>{product.description}</ProductDetailDetails>
        <ProductDetailPrice>
          {product.price} {"KD"}
        </ProductDetailPrice>
      </ProductDetailWrapper>
    </>
  );
};

export default observer(ProductDetails);
