import React, { useEffect, useState } from 'react';
import {View, Text, Button,BackHandler, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {HomeFeira,ListaPromocao,ListaCompra,CompararEstoque,AdcionarPromocao} from './index'
import {css} from '../css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({navigation})
{
    const Tab = createMaterialBottomTabNavigator();
    const [userName,setUserName]=useState(null);

    useEffect (()=>{
        async function getUserName()
        {
            let response=await AsyncStorage.getItem('usuarioData');
            let json=JSON.parse(response);
            setUserName(json.nome);
        }
        getUserName();
    },[]);

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
                {
                    text: "Não",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    navigation.navigate('Home');
                    BackHandler.exitApp();
                    }
                }
            ]);
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);


    return (  
        // style={{marginBottom:30}} 
        // <View style={css.container3}>
        //     <Text >Seja bem vindo {userName}</Text>
        //     <Text >Tela de Home</Text>
        //     <Button
        //         title='Sair'
        //         onPress={() => navigation.navigate('Login')}
        //     />
        // </View>
        <Tab.Navigator
            activeColor='#999'
            inactiveColor='#fff'
            barStyle={css.area__tab}
        >
                <Tab.Screen 
                    name='Promoções' 
                    component={ListaPromocao} 
                    options={{
                        tabBarIcon:()=>(
                            <Icon name="tags" size={20} color="#999" />
                        )
                    }}
                />
                <Tab.Screen 
                    name='Estoque' 
                    component={HomeFeira}
                    options={{
                        tabBarIcon:()=>(
                            <Icon name="archive" size={20} color="#999" />
                        )
                    }}  

                />
                <Tab.Screen 
                    name='Comparador' 
                    component={CompararEstoque} 
                    options={{
                        tabBarIcon:()=>(
                            <Icon name="balance-scale" size={20} color="#999" />
                        )
                    }}
                />
                <Tab.Screen 
                    name='AdcionarPromocao' 
                    component={AdcionarPromocao} 
                    options={{
                        tabBarIcon:()=>(
                            <Icon name="plus-circle" size={20} color="#999" />
                        )
                    }}
                />
                <Tab.Screen 
                    name='ListaCompra' 
                    component={ListaCompra}
                    options={{
                        tabBarIcon:()=>(
                            <Icon name="list-alt" size={20} color="#999" />
                        )
                    }}  
                />
        </Tab.Navigator>
    );
}