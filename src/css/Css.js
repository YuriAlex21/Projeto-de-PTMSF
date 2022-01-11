import { StyleSheet} from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTop:{
    justifyContent:'flex-start'
  },
  container2: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkbg:{
    backgroundColor:"#1C1C1C"
  },
  login__msg:(text='none')=>({
      fontWeight:"bold",
      fontSize: 22,
      color:"red",
      marginBottom: 15,
      display: text
  }),
  Crad__msg:{
    fontWeight:"bold",
    fontSize: 22,
    color:"red",
    marginBottom: 15
  },
  login__form:{
    width: "80%"
  },
  login__input:{
    backgroundColor: "#fff",
    fontSize: 19,
    padding: 7,
    marginBottom: 15
  },
  login__button:{
    padding: 12,
    backgroundColor: "#F58634",
    alignSelf:"center",
    borderRadius:5
  },
  login__buttonText:{
    fontWeight:"bold",
    fontSize: 22,
    color:"#F0F8FF"
  },
  buttonText:{
    fontWeight:"bold",
    fontSize: 22,
    color:"#F0F8FF"
  },
  area__tab:{
    backgroundColor: '#333',
    fontSize: 22,
    color: '#fff'
  },
  lista__PromoText:{
    marginBottom: 10,
    fontSize: 22,
    color: '#4D4A4A'
  },
  area__menu:{
    flexDirection: 'row',
    paddingTop: 60,
    paddingBottom: 10,
    width: '100%',
    backgroundColor:'#111',
    alignItems:'center',
    justifyContent:'center'
},
stack__MenuCollor:{
  backgroundColor:'#111',
},
button__home:{
    textAlign:'left'
},
area__title:{
    width: '80%',
    fontWeight:'bold',
    fontSize:20,
    color:'#fff',
    textAlign:'center'
},
button__logout:{
    textAlign:'right'
},
button__back:{
  textAlign:'right'
},
espaço__button:{
  paddingTop: 10
},
button_down:{
  marginBottom: 160
},
button_up:{
  marginTop: 100,
  marginBottom: 100
},
button__left:{
  marginLeft: 40
},
button__left2:{
  marginLeft: 160
},
button__right:{
  marginRight: 40
},
button__Size:{
  width: '40%',
},
Add__button:{
  padding: 12,
  backgroundColor: "#1668D8",
  alignSelf:"center",
  borderRadius:5,
  marginLeft:10
  
},
view__ListaProd:{
  backgroundColor: '#C0F0DD',
  borderRadius:5,
  padding: 30,
  marginBottom: 5,
  marginRight: 10,
  flexDirection:'column',
  alignItems:'flex-start'
}
});
export {css};
