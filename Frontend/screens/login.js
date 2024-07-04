import React,{useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Octicons, Ionicons, Fontisto} from "@expo/vector-icons";
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  SubTitle,
  StyledTextInput,
  StyledButton,StyledInputLabel,ButtonText,
  LeftIcon,RightIcon,Colors,MessageBox,Line,
  ExtraText,ExtraView,TextLink,TextLinkContent
} from "../components/styles";
import { Formik } from "formik";
import { View } from "react-native";

const{brand, darkLight, primary}=Colors;
const Login = ()=>{
  const [hidePassword, setHidepassword]=useState(true)
    return (
      <StyledContainer>
        <StatusBar style='dark' />
        <InnerContainer>
          <PageTitle>Shamiri Journals</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={{ EMAIL: "", PASSWORD: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
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
                  <ButtonText>LOGIN</ButtonText>
                </StyledButton>
                <Line />
                <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color={primary}/>
                  <ButtonText google={true}>sign in with Google</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Don't have an account?</ExtraText>
                  <TextLink>
                    <TextLinkContent>Signup</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    );
}

const MyTextInput=({label,icon,hidePassword,setHidepassword,isPassword,...props})=>{
    return (
      <View>
        <LeftIcon>
          <Octicons name={icon} size={30} color={brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
          <RightIcon onPress={()=>setHidepassword(!hidePassword)}>
            <Ionicons
              name={hidePassword ? "eye-off" : "eye"}
              size={30}
              color={darkLight}
            />
          </RightIcon>
        )}
      </View>
    );
}
export default Login;