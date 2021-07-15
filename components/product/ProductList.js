import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import ProductItem from "./ProductItem";

//styles
import { ListWrapper } from "./styles";

//stores
import productStore from "../../stores/productStore";

const ProductList = ({ products, navigation }) => {
  if (productStore.loading) return <Spinner />;
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} navigation={navigation} />
  ));
  return (
    <ListWrapper>
      <List>{productList}</List>
    </ListWrapper>
  );
};

export default ProductList;
