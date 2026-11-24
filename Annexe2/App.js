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
        <Image source={imagePlay}></Image>
        <Image source={imageSon}></Image>
        <View style={styles.conteneur}>
          <View style={styles.liquide}></View>
        </View>
        <Image source={imageSign}></Image>
        <Image source={imageScreen}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ligneControle:{
    flexDirection: 'row',
    justifyContent: "space-around",
    backgroundColor: 'black',
    height: 50, 
    alignItems: 'center'
  }, 

  ecran:{
    justifyContent: "space-around"
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
