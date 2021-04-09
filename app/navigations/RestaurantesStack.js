import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Restaurants from "../screens/Restaurants";

const Stack = createStackNavigator();
export default function RestaurantesStack(){
    return(
        <Stack.Navigator>
          
            <Stack.Screen
            name="restaurante"
            component={Restaurants}
            options={{title:"Restuarantes"}}
            />
            
        </Stack.Navigator>
    )
}
