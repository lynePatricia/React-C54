import { StyleSheet, Text, View, Image } from 'react-native';

const imagePlay = require('./assets/images/play.png');
const imageScreen = require('./assets/images/full-screen.png');
const imageSign = require('./assets/images/hd-sign.png');
const imageSon = require('./assets/images/sound.png');
const imageVideo = require('./assets/images/video.jpg');

export default function App() {
  return (

    <View style={styles.ecran}>
      <Image style={styles.image} source={imageVideo} />
      <View style={styles.ligneControle}>
        <Image style={styles.icones} source={imagePlay}/>
        <Image style={styles.icones} source={imageSon}/>
        <View style={styles.conteneur}>
          <View style={styles.liquide}></View>
        </View>
        <Image style={styles.icones} source={imageSign}/>
        <Image style={styles.icones} source={imageScreen}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ligneControle:{
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'black',
    height: 50, 
    alignItems: 'center'
  }, 

  ecran:{
    justifyContent: "center",
    flex: 1,
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },

  conteneur: {
    flex: 1,
    height: 6,
    backgroundColor: "#2A2C31", 
    borderRadius: 2,
    marginHorizontal: 15, 
  },

  liquide: {
    height: '100%',
    width: '70%',
    backgroundColor: "red", 
    borderRadius: 2,
  },

  icones:{
    marginHorizontal: 5,
  }
});
