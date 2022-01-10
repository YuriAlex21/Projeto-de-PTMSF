import React, {useState,useEffect} from 'react';
import {Text,TextInput, TouchableOpacity, View} from "react-native";
import { css } from '../../src/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuTop from '../../assets/components/MenuTop';
import config from "../../config/config.json";

export default function Perfil({navigation}){
    
    const [idUser, setIdUser] = useState('');
    const [userName,setUserName]=useState(null);
    const [senhaAntiga, setSenhaAntiga] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confNovaSenha, setConfNovaSenha] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(()=>{
        async function getIdUser()
        {
            let response=await AsyncStorage.getItem('usuarioData');
            let json=JSON.parse(response);
            setIdUser(json.id);
            setUserName(json.nome);
        }
        getIdUser();
     });
    
    async function sendForm(){
         let response=await fetch(`${config.urlRoot}verifyPass`,{
             method:'POST',
             body:JSON.stringify({
                 id: idUser,
                 senhaAntiga: senhaAntiga,
                 novaSenha: novaSenha,
                 confNovaSenha: confNovaSenha
             }),
             headers:{
                 Accept: 'application/json',
                 'Content-Type': 'application/json'
             }
         });
         let json=await response.json();
         setMsg(json);
    }
 

    return(
        // 
        <View style={[css.container, css.containerTop]}>
            <MenuTop  title='Perfil' navigation={navigation}/>
            <View>    
                <TouchableOpacity style={css.login__form} onPress={()=>navigation.navigate('Home')}>
                    <Icon name="angle-left" size={50} color="#999" />
                </TouchableOpacity>
            </View>    
                
            <View style={[css.container1, css.login__form]}>
                <Text>Olá {userName}</Text>
            </View>
            <Text>gerecionamento do perfil</Text>
            <Text style={css.login__form}>Alterar Senha</Text>
            <View style={css.login__form}>
                <Text>{msg}</Text>
                <TextInput style={css.login__input} placeholder='Senha Antiga:' onChangeText={text=>setSenhaAntiga(text)}  secureTextEntry={true}/>
                <TextInput style={css.login__input} placeholder='Nova Senha:' onChangeText={text=>setNovaSenha(text)}  secureTextEntry={true}/>
                <TextInput style={css.login__input} placeholder='Confirmação da Nova Senha:' onChangeText={text=>setConfNovaSenha(text)}  secureTextEntry={true}/>
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text>Trocar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}