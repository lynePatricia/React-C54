import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function Coeur() {
  const text1 = "J'aime pas du tout"; 
  const text2 = "J'aime"; 
  const [valeur, setValeur] = useState(true); 
  const imageCoeur = require('./assets/heart.png');
  const gestion = () => {
    if(valeur){
        setValeur(false);
    }else{
        setValeur(true); 
    }
  }
  return (
    <View style={style.container}>
        {valeur ?(
            <>
                <TouchableOpacity onPress={gestion}>
                    <Image source={imageCoeur} tintColor={"red"} ></Image>
                </TouchableOpacity>
                <Text>{text2}</Text>
            </>
        ): <>
                <TouchableOpacity onPress={gestion}>
                    <Image source={imageCoeur} tintColor={"white"} ></Image>
                </TouchableOpacity>
                <Text>{text1}</Text>
            </>
        }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
