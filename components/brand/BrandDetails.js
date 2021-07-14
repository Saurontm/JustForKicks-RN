import React from "react";

//stores
import brandStore from "../../stores/brandStore";
import productStore from "../../stores/productStore";

//observer
import { observer } from "mobx-react";
import ProductList from "../product/ProductList";

//styles
import {
  BrandDetailTitle,
  BrandDetailImage,
  BrandDetailWrapper,
} from "./styles";

//native-base
import { Spinner } from "native-base";

const BrandDetails = ({ navigation, route }) => {
  const { brand } = route.params;
  if (brandStore.loading) return <Spinner />;
  const products = brand.products.map((product) =>
    productStore.getProductById(product.id)
  );
  return (
    <>
      <BrandDetailWrapper>
        <BrandDetailImage source={{ uri: brand.image }} />
        <BrandDetailTitle>{brand.name}</BrandDetailTitle>
      </BrandDetailWrapper>
      <ProductList products={products} />
    </>
  );
};

export default observer(BrandDetails);
