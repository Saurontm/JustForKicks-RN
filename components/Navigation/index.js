import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import BrandList from "../brand/BrandList";
import BrandDetails from "../brand/BrandDetails";
import ProductDetails from "../product/ProductDetails";

const Stack = createStackNavigator();
export default RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BrandList"
        component={BrandList}
        options={{
          title: "Choose a brand",
        }}
      />
      <Stack.Screen
        name="BrandDetails"
        component={BrandDetails}
        options={({ route }) => {
          const { brand } = route.params;
          return {
            title: brand.name,
          };
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ route }) => {
          const { product } = route.params;
          return {
            title: product.name,
          };
        }}
      />
    </Stack.Navigator>
  );
};
