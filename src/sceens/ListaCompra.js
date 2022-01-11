import React, {useState,useEffect} from 'react';
import {Text,TextInput, TouchableOpacity, View,ActivityIndicator, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from '../css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuTop from '../../assets/components/MenuTop';
import config from "../../config/config.json";

export default function ListaCompra({navigation}) {

    const [isLoading, setLoading] = useState(true);
    const [dados, setDados]=useState([]);
    const [idUser, setIdUser] = useState('');

    async function getPromocao()
    {
        try {
            if (idUser == 1) {
                const response = await fetch(`${config.urlRoot}listaLista`);
                const json = await response.json();
                setDados(json);   
            }
            // const response = await fetch(`${config.urlRoot}listaLista`);
            // const json = await response.json();
            // setDados(json);   
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
    }
    
    useEffect(()=>{
        async function getIdUser()
        {
            let response=await AsyncStorage.getItem('usuarioData');
            let json=JSON.parse(response);
            setIdUser(json.id);
        }
        getIdUser();
     });
     
    useEffect(()=>{
        // setTimeout(()=>{
        //     
        // },5000);
        getPromocao();
     }, []);

//      async function sendForm(itemID){
//         //  setIdItem(id)
//         let response=await fetch(`${config.urlRoot}criarLista`,{
//             method:'POST',
//             body:JSON.stringify({
//                 idLista: idUser,
//                 idItem: itemID
//             }),
//             headers:{
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         });
//         let json=await response.json();
//    }     

    return (
        <View style={[css.container, css.containerTop]}>
            <MenuTop  title='Lista de Compras' navigation={navigation}/>
            <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                data={dados}
                keyExtractor={({ usuarioId }, index) => usuarioId}
                renderItem={({ item }) => (
                    <View style={css.view__ListaProd}>
                    <Text  style={css.lista__PromoText}> {item.nome}</Text>
                    <Text  style={css.lista__PromoText}>Valor: R${item.valor}</Text>
                    </View>
                )}
                />
            )}
            </View>
        </View>
    );
}