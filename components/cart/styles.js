import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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

export const TrashIcon = styled(FontAwesome)`
  color: ${(props) => props.theme.redColor};
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.mainColor};
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-weight: bold;
  font-size: 18px;
`;
