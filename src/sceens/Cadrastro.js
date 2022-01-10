import React, {useState,useEffect} from 'react';
import {Text,TextInput, TouchableOpacity,KeyboardAvoidingView, Platform , View} from "react-native";
import { css } from '../../src/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuTop from '../../assets/components/MenuTop';
import config from "../../config/config.json";

export default function Cadrastro({navigation}){
    
    const [nome, setNome]=useState('');
    const [usuario, setUsuario]=useState('');
    const [senha, setSenha]=useState('');
    const [msg, setMsg] = useState('');
    
        //Envia o formulario do cadrastro
        async function sendForm(){
            let response=await fetch(`${config.urlRoot}cadrastroUsuario`,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    usuario: usuario,
                    senha: senha
                })
            });
            let json=await response.json();
            setMsg(json);
        }

    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={[css.container, css.darkbg]}
        >   
            <View>
                <Text style={css.Crad__msg}>{msg}</Text>
            </View>
            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Nome' onChangeText={text=>setNome(text)}/>
                <TextInput style={css.login__input} placeholder='Usuario' onChangeText={text=>setUsuario(text)}/>
                <TextInput style={css.login__input} placeholder='Senha' onChangeText={text=>setSenha(text)} secureTextEntry={true}/>
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}> 
                    <Text style={css.login__buttonText}>Cadrastrar</Text>
                </TouchableOpacity>
                <View style={css.espaço__button}>
                <TouchableOpacity style={css.login__button} onPress={()=>navigation.navigate('Login')}>
                    <Icon name="angle-left" size={50} color="#F0F8FF" />
                </TouchableOpacity></View>
            </View> 
        </KeyboardAvoidingView>
    )
}