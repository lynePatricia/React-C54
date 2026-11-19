import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// export default function Playlist() 
// {
//   return (
//     <SafeAreaView>
//       <Chanson />
//       <Chanson />
//       <Chanson />
//       <Chanson />
//     </SafeAreaView>
//   )
// }
// export default function Playlist() 
// {
//   const tab = [];
//   for(let i = 0; i < 4; i++){
//     tab[i] = <Chanson />;
//   }
//   return (
//     <SafeAreaView>
//       {tab}
//     </SafeAreaView>
    
//   );
// }

export default function Playlist()
{
  const tab = [];
  for(let i = 0; i < 2; i++){
    tab[i] = <View style={style.ligne}><Chanson /><Chanson /></View>;
  }

  return (
    <SafeAreaView style={style.content}>
      {tab}
    </SafeAreaView>
    
  );
}

function Chanson() {
  const nom = "L'autre hémisphère";
  return (
    <SafeAreaView>
      <Text style={[style.texte, style.conteneur]}>{nom}</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  texte: {
    fontSize: 20,
    fontStyle: 'italic'
  },
  conteneur: {
    backgroundColor: "pink",
    margin: 10, //il s'agit de 2dp
    borderRadius: 7
  },
  ligne :{
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  content : {
    padding : 2
  }

})
