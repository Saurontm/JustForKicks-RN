import styled from "styled-components/native";
import { List } from "native-base";

export const ListWrapper = styled.View`
  margin-top: 10%;
`;

export const ProductDetailWrapper = styled.View`
  margin: 20px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const ProductDetailImage = styled.Image`
  width: 100%;
  height: undefined;
  aspect-ratio: 2;
  margin-bottom: 20px;
`;

export const ProductDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 20px;
`;

export const ProductItemTitle = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;

export const ProductDetailDetails = styled.Text`
  font-size: 20px;
`;

export const ProductDetailPrice = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.secondaryColor};
  margin: 40px;
`;

export const ProductListItem = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  Image {
    width: 100%;
    height: undefined;
    aspect-ratio: 2;
    margin-bottom: 20px;
  }
`;

export const ProductItemPrice = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.secondaryColor};
`;
