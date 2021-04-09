import React from "react";
import {NavigationContainer}from "@react-navigation/native";
import { createBottomTabNavigator } from  "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements";

import RestaurantesStack from "./RestaurantesStack";
import FavoritosStack  from "./FavoritosStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import BuscadorStack from "./BuscadorStack";
import CuentaStack from "./CuentaStack";

const  Tab =createBottomTabNavigator();
export default function Navegacion(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="restaurantes"
            tabBarOptions={{
                inactiveTintColor:"#646464",
                activeTintColor:"#00a680",
            }}

            screenOptions={({route}) => ({
                tabBarIcon: ({color}) =>screenOptions(route,color),
            })}
        
            >
               <Tab.Screen 
               name="restaurantes" 
               component={RestaurantesStack}
               options={{title:"Sede"}}
               />
               <Tab.Screen 
               name="fovoritos"
               component={FavoritosStack}
               options={{title:"Favoritos"}}
               />
               <Tab.Screen 
               name="Top-restaurantes"
               component={TopRestaurantsStack}
               options={{title:"Top 5"}}
               />
                <Tab.Screen name="Buscador"
                component={BuscadorStack}
                options={{title:"Buscar"}}
                
                />
                <Tab.Screen 
                name="Cuenta"
                component={CuentaStack}
                options={{title:"Cuenta"}}

                />

               

            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions (route, color){

    let inconName
    switch (route.name) {
        case "restaurantes":
            inconName = "compass-outline";
            break;
            case "fovoritos":
            inconName = "heart-outline";
            break;
            case "Top-restaurantes":
            inconName = "star-outline";
            break;
            case "Buscador":
            inconName = "magnify";
            break;
            case "Cuenta":
            inconName = "account-heart";
            break;
        default:
            break;
    }
    return(
        <Icon type="material-community" name={inconName}  size={22} color={color}/>
    )
}

