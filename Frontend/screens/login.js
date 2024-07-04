import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  SubTitle,
  StyledTextInput,
  StyledButton,StyledInputLabel,ButtonText
} from "../components/styles";
import { Formik } from "formik";
import { View } from "react-native";

const Login = ()=>{
    return (
      <StyledContainer>
        <StatusBar style="dark"/>
          <InnerContainer>
              <PageTitle>Shamiri Journals</PageTitle>
              <SubTitle>Account Login</SubTitle>
              <Formik initialValues={{EMAIL:'', PASSWORD:''}}
              onSubmit={(values)=>{
                console.log(values);
              }}>{(handleChange,handleBlur,handleSubmit,value)=><StyledFormArea></StyledFormArea>}
                
              </Formik>
          </InnerContainer>
      </StyledContainer>
      
    );
}

const MyTextInput=({label,icon,...props})=>{
    return(
        <View>

        </View>
    )
}
export default Login;