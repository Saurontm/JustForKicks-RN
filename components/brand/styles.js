import styled from "styled-components/native";

export const ListWrapper = styled.View`
  margin-top: 10%;
`;

export const BrandItemStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const BrandItemQuantity = styled.Text`
  color: ${(props) => props.theme.lightColor};
`;

export const BrandDetailWrapper = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const BrandDetailImage = styled.Image`
  ${
    "" /* width: 180px;
  height: 150px; */
  }
  width: 70%;
  height: undefined;
  aspect-ratio: 2;
  margin-bottom: 20px;
`;

export const BrandDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
`;

export const BrandItemImage = styled.Image`
  width: 60px;
  height: undefined;
  aspect-ratio: 2;
  margin-bottom: 20px;
`;
