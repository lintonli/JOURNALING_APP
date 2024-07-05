import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  SubTitle,
  StyledTextInput,
  StyledButton,
  StyledInputLabel,
  ButtonText,
  LeftIcon,
  RightIcon,
  Colors,
  MessageBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from "../components/styles";
import { Formik } from "formik";
import { View } from "react-native";

const { brand, darkLight, primary } = Colors;
const Signup = ({navigation}) => {
  const [hidePassword, setHidepassword] = useState(true);
  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <PageTitle>Shamiri Journals</PageTitle>
        <SubTitle>Account Signup</SubTitle>
        <Formik
          initialValues={{ EMAIL: "", PASSWORD: "", NAME: "" }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("Login");
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label='Full Name'
                icon='person'
                placeholder='john doe'
                placeHolderTextColor={darkLight}
                onChangeText={handleChange("NAME")}
                onBlur={handleBlur("NAME")}
                value={values.NAME}
              />
              <MyTextInput
                label='Email Address'
                icon='mail'
                placeholder='joe@gmail.com'
                placeHolderTextColor={darkLight}
                onChangeText={handleChange("EMAIL")}
                onBlur={handleBlur("EMAIL")}
                value={values.EMAIL}
                keyboardType='email-address'
              />
              <MyTextInput
                label='Password'
                icon='lock'
                placeholder='* * * * * * * *'
                placeholderTextColor={darkLight}
                onChangeText={handleChange("PASSWORD")}
                onBlur={handleBlur("PASSWORD")}
                value={values.PASSWORD}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidepassword={setHidepassword}
              />
              <MessageBox>...</MessageBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>SIGNUP</ButtonText>
              </StyledButton>
              <Line />

              <ExtraView>
                <ExtraText>Already have an account?</ExtraText>
                <TextLink onPress={() => navigation.navigate("Login")}>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({
  label,
  icon,
  hidePassword,
  setHidepassword,
  isPassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidepassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "eye-off" : "eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};
export default Signup;
