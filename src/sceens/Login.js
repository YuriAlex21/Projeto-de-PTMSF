import React, {useState,useEffect}  from 'react';
import {TextInput ,KeyboardAvoidingView, Platform ,View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {css} from '../css/Css';
import config from "../../config/config.json";

export default function Login({navigation})
{
    //variaveis onde seram salvo os dados digitado pelo usuario
    const [display, setDisplay]=useState('none');
    const [usuario, setUsuario]=useState('');
    const [senha, setSenha]=useState('');
    const [login, setLogin]=useState('');
    
    //Envia o formulario de login
    async function sendForm(){
        let response=await fetch(`${config.urlRoot}login`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: usuario,
                senha: senha
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },5000);
            await AsyncStorage.clear();
        }else{
            await AsyncStorage.setItem('usuarioData', JSON.stringify(json));
            // let resData=await AsyncStorage.getItem('usuarioData');
            // console.log(JSON.parse(resData));
            navigation.navigate('Home');
        }
    }
    
    
    return (
     <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={[css.container, css.darkbg]}
     >
        {/* <Text style={showMsg ? css.login__msg : [css.login__msg, css.hidden]}>Usuário ou Senha inválidos</Text> */}
        <View>
            <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
        </View>

        <View style={css.login__form}>
            {/* <Text>{usuario}----{senha} </Text> */}
            <TextInput style={css.login__input} placeholder='Usuario' onChangeText={text=>setUsuario(text)}/>
            <TextInput style={css.login__input} placeholder='senha' onChangeText={text=>setSenha(text)} secureTextEntry={true}/>
            {/* </View>onPress={()=>setDisplay('flex')}> onPress={() => navigation.navigate('Home')} */}
            <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}> 
                <Text style={css.login__buttonText}>Entrar</Text>
            </TouchableOpacity>
            <View style={css.espaço__button}>
            <TouchableOpacity style={css.login__button}  onPress={()=>navigation.navigate('Cadrastro')}>
                <Text style={css.login__buttonText}>Cadrastra-se</Text>
            </TouchableOpacity></View>
        </View> 
     </KeyboardAvoidingView>

    );
}