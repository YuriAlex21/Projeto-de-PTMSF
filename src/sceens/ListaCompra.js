import React, {useState,useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from '../css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuTop from '../../assets/components/MenuTop';

export default function ListaCompra({navigation}) {

    return (
        <View style={[css.container, css.containerTop]}>
            <MenuTop  title='Lista de Compras' navigation={navigation}/>
            <Text>Lista de compra</Text>
        </View>
    );
}