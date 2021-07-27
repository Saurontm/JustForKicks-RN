import styled from "styled-components/native";

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 50px;
  font-style: italic;
  font-family: Baskerville;
`;

export const AuthSubTitle = styled.Text`
  color: ${(props) => props.theme.secondaryColor};
  font-size: 20px;
  font-style: italic;
  font-family: Baskerville;
  margin-top: 5px;
  margin-bottom: 30px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.mainColor};
  border-bottom-color: ${(props) => props.theme.lightColor};
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.mainColor};
  margin-top: 30px;
  border-radius: 7;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
  font-family: Arial;
`;

export const AuthOther = styled.Text`
  color: ${(props) => props.theme.mainColor};
  margin-top: 20px;
  font-size: 20px;
  font-style: italic;
  font-family: Baskerville;
`;
