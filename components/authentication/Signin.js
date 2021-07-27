import React, { useState } from "react";
import {
  AuthTitle,
  AuthContainer,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
  AuthSubTitle,
} from "./styles";
//observer
import { observer } from "mobx-react";
//stores
import authStore from "../../stores/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("BrandList");
  };

  return (
    <AuthContainer>
      <AuthTitle> Sign-in </AuthTitle>
      <AuthSubTitle> Welcome back! </AuthSubTitle>
      <AuthTextInput
        placeholder="username"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign-in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        New here? Sign-up
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
