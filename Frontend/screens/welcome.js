import React from "react";
import { StatusBar } from "expo-status-bar";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import {
  
  InnerContainer,
  PageTitle,
  StyledFormArea,
  SubTitle,
  StyledButton,
  ButtonText,
  Colors,
  Line,
  WelcomeContainer,WelcomeImage
} from "../components/styles";

import { View } from "react-native";

const { brand, darkLight, primary } = Colors;
const Welcome = ({navigation}) => {
 
  return (
    <>
      <StatusBar style='light' />
      <InnerContainer>
        <WelcomeImage
          resizeMode='cover'
          source={{
            uri: "https://cdn.pixabay.com/photo/2017/08/07/20/21/still-2607441_640.jpg",
          }}
        />
        <WelcomeContainer>
          <PageTitle welcome={true}>Shamiri Journals</PageTitle>
          <SubTitle welcome={true}>Welcome to our Shamiri APP</SubTitle>

          <StyledFormArea>
            <Line />
            <StyledButton onPress={() => navigation.navigate("Login")}>
              <ButtonText>LOGOUT</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
