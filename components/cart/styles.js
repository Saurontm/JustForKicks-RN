import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const CartButtonStyled = styled(Feather)`
  color: ${(props) => props.theme.mainColor};
  margin-right: 10px;
`;

export const TotalPrice = styled.Text`
  color: ${(props) => props.theme.lightColor};
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;
