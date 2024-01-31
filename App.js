import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = ()=>{
return(
  <View style={style.container}>
    <Text style={style.textHello}>Hola mundo</Text>
    <Text style={style.text}>Soy Alan</Text>

  </View>
);
}
const style = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHello:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#FFFF'
  },
  text:{
    color: '#FFFF'
  },
 
})

export default App;


