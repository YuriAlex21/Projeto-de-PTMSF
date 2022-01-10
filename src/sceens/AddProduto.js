import React, {useState,useEffect} from 'react';
import {Text,TextInput, TouchableOpacity,KeyboardAvoidingView, Platform , View} from "react-native";
import { css } from '../../src/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuTop from '../../assets/components/MenuTop';
import config from "../../config/config.json";

export default function AddProduto({navigation}) {
    
    const [nome, setNome]=useState('');
    const [codigo, setCodigo]=useState('');
    const [idUser, setIdUser] = useState('');
    const [msg, setMsg] = useState('');
    
    
    useEffect(()=>{
        async function getIdUser()
        {
            let response=await AsyncStorage.getItem('usuarioData');
            let json=JSON.parse(response);
            setIdUser(json.id);
        }
        getIdUser();
     });
    //Envia o formulario do cadrastro do item
    async function sendForm(){
    let response=await fetch(`${config.urlRoot}cadrastroItem`,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            codigo: codigo,
            idUser: idUser
        })
    });
    let json=await response.json();
    setMsg(json);
}



    
    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={[css.container, css.darkbg]}
    >   
        <View>
            <Text style={css.Crad__msg}>{msg}</Text>
        </View>
        <View style={css.login__form}>
            <TextInput style={css.login__input} placeholder='Nome' onChangeText={text=>setNome(text)}/>
            <TextInput style={css.login__input} placeholder='Codigo de Barra' onChangeText={text=>setCodigo(text)}/>
            <TouchableOpacity style={[css.login__button, css.button__left2]} onPress={()=>sendForm()}> 
                <Text style={css.login__buttonText}>Cadrastrar</Text>
            </TouchableOpacity>
        </View> 
    </KeyboardAvoidingView>
    );
}   