import React, {useState,useEffect} from 'react';
// import { StatusBar } from 'expo-status-bar';
// import {Text, View } from 'react-native';
// import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Login,Cadrastro,Perfil, AddProduto, CriarFeira, VerFeira, RemoverProduto} from './src/sceens'
import  Home from './src/sceens/Home'; 
import { css } from './src/css/Css';


export default function App() {

  const Stack = createStackNavigator();

  // async function teste(){
  //   let resData=await AsyncStorage.getItem('usuarioData');
  //   console.log(JSON.parse(resData));
  // }
  // teste();

  return (
    // <View style={css.container}>
    //   <Text>Hello World</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="Perfil" options={{headerShown:false}} component={Perfil} />
        <Stack.Screen name="Cadrastro" options={{headerShown:false}} component={Cadrastro} />
        <Stack.Screen name="AddProduto"  component={AddProduto} />
        <Stack.Screen name="CriarFeira"  component={CriarFeira} />
        <Stack.Screen name="VerFeira"  component={VerFeira} />
        <Stack.Screen name="RemoverProduto"  component={RemoverProduto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

