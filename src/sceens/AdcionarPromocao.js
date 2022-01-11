import React, {useState,useEffect} from 'react';
import {Text,TextInput, TouchableOpacity,KeyboardAvoidingView, Platform , View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from '../css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuTop from '../../assets/components/MenuTop';
import config from "../../config/config.json";

export default function AdcionarPromocao({navigation}) {
    const [nome, setNome]=useState('');
    const [local, setLocal]=useState('');
    const [valor, setValor] = useState('');
    const [msg, setMsg] = useState('');

    async function sendForm(){
        let response=await fetch(`${config.urlRoot}cadrastroPromocao`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                local: local,
                valor:valor
            })
        });
        let json=await response.json();
        setMsg(json);
    }
    
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={[css.container, css.containerTop]}
        >
            <MenuTop  title='Adcionar Promoções' navigation={navigation}/>
                <View>
                    <Text style={css.Crad__msg}>{msg}</Text>
                </View>
                <View style={css.login__form}>
                    <TextInput style={css.login__input} placeholder='Nome do item' onChangeText={text=>setNome(text)}/>
                    <TextInput style={css.login__input} placeholder='Local da promoção' onChangeText={text=>setLocal(text)}/>
                    <TextInput style={css.login__input} placeholder='Valor' onChangeText={text=>setValor(text)}/>
                    <TouchableOpacity style={[css.login__button, css.button__left2]} onPress={()=>sendForm()}> 
                        <Text style={css.login__buttonText}>Cadrastrar</Text>
                    </TouchableOpacity>
                </View> 
        </KeyboardAvoidingView>
    );
}