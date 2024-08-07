import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Welcome from "../screens/welcome";
import { Colors } from "../components/styles";
const{primary, tertiary}= Colors;
const Stack = createStackNavigator();
 const RootStack =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor:'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent:true,
                    headerTitle:'',
                    headerLeftContainerStyle:{
                        paddingLeft:28
                    }
                }}
                initialRouteName="Login"
                >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Welcome" component={Welcome}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;