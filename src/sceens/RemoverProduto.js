import React, {useState,useEffect} from 'react';
import {Text,TextInput, TouchableOpacity,KeyboardAvoidingView, Platform , View} from "react-native";
import { css } from '../../src/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuTop from '../../assets/components/MenuTop';
import config from "../../config/config.json";

export default function RemoverProduto({navigation}) {
    return (
        <View style={[css.container, css.containerTop]}>
            <Text>Remove um item da sua feira</Text>
        </View>
    );
}   