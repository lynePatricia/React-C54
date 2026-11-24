import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const nom = "cliquez"; 
  const [valeur, setValeur] = useState(1); 
  const gestion = () => { setValeur(valeur+1); }
  return (
    <View style={style.container}>
      <Button onPress={gestion} title={nom}></Button>
      <Text>{valeur}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
