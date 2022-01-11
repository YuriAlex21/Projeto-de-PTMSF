import React, {useState,useEffect} from 'react';
import {Text, View, Button,TextInput, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from '../css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuTop from '../../assets/components/MenuTop';

export default function HomeFeira({navigation}) {

    return (
        <View style={[css.container, css.containerTop]}>
            <MenuTop  title='Estoque' navigation={navigation}/>
            {/* <Text>Menu para o gerecionamento de feira</Text> */}
            <View style={[css.container2,css.button_up]}>
                <TouchableOpacity style={[css.login__button,css.button__right,css.button__Size]} onPress={()=>navigation.navigate('AddProduto')}> 
                    <Image source={require('../../assets/Addprodutos.png')}/>
                    <Text style={css.buttonText}>Adicionar</Text>
                    <Text style={css.buttonText}>produto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[css.login__button,css.button__Size]} onPress={()=>navigation.navigate('CriarFeira')}> 
                    <Image source={require('../../assets/CriarFeira.png')}/>
                    <Text style={css.buttonText}>Criar</Text>
                    <Text style={css.buttonText}>feira</Text>
                </TouchableOpacity>
            </View>
            <View style={[css.container2, css.button_down]}>
                <TouchableOpacity style={[css.login__button,css.button__right,css.button__Size]} onPress={()=>navigation.navigate('VerFeira')}> 
                    <Image source={require('../../assets/verFeira.png')}/>
                    <Text style={css.buttonText}>ver</Text>
                    <Text style={css.buttonText}>Feira</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[css.login__button,css.button__Size]} onPress={()=>navigation.navigate('RemoverProduto')}> 
                    <Image style={{justifyContent: 'center'}} source={require('../../assets/removerItem.png')}/>
                    <Text style={css.buttonText}>Remove</Text>
                    <Text style={css.buttonText}>Produto</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}