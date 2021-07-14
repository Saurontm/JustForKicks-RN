import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const OverLayContainter = styled.View`
  flex: 1;
`;

export const TopStyling = styled.View`
  height: 65%;
  align-items: center;
  justify-content: center;
`;

export const BottomStyling = styled.View`
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyling = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 20px;
  font-weight: bold;
  ${"" /* background-color: ${(props) => props.theme.backgroundColor}; */}
  border-width: 3px;
  border-color: ${(props) => props.theme.backgroundColor};
  border-radius: 23;
  padding: 10px;
  padding-right: 15px;
  padding-left: 15px;
`;
