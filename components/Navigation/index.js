import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import BrandList from "../brand/BrandList";
import BrandDetails from "../brand/BrandDetails";
import ProductDetails from "../product/ProductDetails";
import CartButton from "../cart/buttons/CartButton";
import CartList from "../cart/CartList";
import Signin from "../authentication/Signin";
import SignUp from "../authentication/SignUp";

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
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name="BrandDetails"
        component={BrandDetails}
        options={({ route }) => {
          const { brand } = route.params;
          return {
            title: brand.name,
            headerRight: () => <CartButton />,
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

      <Stack.Screen name="CartList" component={CartList} />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
