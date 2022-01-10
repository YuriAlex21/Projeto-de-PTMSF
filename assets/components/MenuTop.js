import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import { css } from '../../src/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MenuTop(props){
    async function logout(){
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    }
    return(
        <View style={css.area__menu}>
            <TouchableOpacity style={css.button__home} onPress={()=>props.navigation.navigate('Perfil')}>
                <Icon name="user" size={20} color="#999" />
            </TouchableOpacity>

            <Text style={css.area__title}>{props.title}</Text>

            <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
                <Icon name="sign-out" size={20} color="#999" />
            </TouchableOpacity>
        </View>
    );
}   