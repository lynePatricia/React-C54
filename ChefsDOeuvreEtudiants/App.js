import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import { liste } from './assets/libs/donnees.js';
import { useState } from 'react';

function Galerie() {
  const [index, setIndex] = useState(0);
  const [affiche, setAffiche] = useState(false); 

  function gestion() {
    setIndex((index + 1) % liste.length);

    //ou 
    // if(index === liste.length - 1){
    //   setIndex(0);
    // }else{
    //   setIndex(index+1); 
    // }
  } 
  function retour(){
    setIndex((index - 1 + liste.length) % liste.length);
  }

  function description(){
    setAffiche(!affiche);
  }

  let oeuvre = liste[index];
  const image = { uri: oeuvre.url };
  return (
   
    <View style={styles.main}>
      <View style={styles.conteneur}>
        <TouchableHighlight onPress={retour} style={styles.bouton}>
            <Text style={styles.text}>Précédent</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={gestion} style={styles.bouton}>
          <Text style={styles.text}>Suivant</Text>
        </TouchableHighlight>
      </View>
      <Text>
        {oeuvre.name + " de " +oeuvre.artist}
      </Text>
      <Text>  
        ({index + 1} de {liste.length})
      </Text>
      <Image style={styles.image}
        source={image} 
      />
      <TouchableOpacity onPress={description} style={styles.bouton}>
          <Text style={styles.text}>{affiche ? "fermer la description" : "afficher la description"}</Text>
      </TouchableOpacity>
      
      <ScrollView contentContainerStyle={styles.scroll} >
        <Text style={styles.text1}>
          {affiche ? oeuvre.desc : ""}
        </Text>
      </ScrollView>
      
    </View>
  );
}


const styles = StyleSheet.create(
  {
    image : {
      width:160,
      height:160,
      marginBottom: 10,
    },

    main : {
      justifyContent: 'center',
      alignContent: 'center', 
      alignItems:'center',
      marginTop:20
    },

    conteneur: {
      flexDirection : 'row',
      gap:15,
    },

    bouton : {
      backgroundColor : "blue",
      borderRadius: 5, 
      paddingVertical: 10,
      paddingHorizontal: 16,
    },

    text: {
      color: "white", 
    },

    text1:{
      fontSize: 20,
    },
   
    scroll: {
      textAlign: 'justify', 
      margin: 5,
      flex:1

    }
  }
)
export default Galerie;

