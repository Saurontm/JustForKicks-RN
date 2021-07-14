import React from "react";
import { Button } from "react-native";

//styles
import {
  HomeBackground,
  OverLayContainter,
  BottomStyling,
  ButtonStyling,
  TopStyling,
  Title,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground source={require("../assets/JFK-Home.png")}>
      <OverLayContainter>
        <TopStyling></TopStyling>
        <BottomStyling>
          <ButtonStyling onPress={() => navigation.navigate("BrandList")}>
            Shop your dream sneakers
          </ButtonStyling>
        </BottomStyling>
      </OverLayContainter>
    </HomeBackground>
  );
};

export default Home;
