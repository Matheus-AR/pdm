import { useContext } from 'react';
import { View, FlatList, Text, Button } from 'react-native';

import { ContatoContext } from '../contexts/ContatoContext';


const Home = ({ navigation }) => {
  const { contatos } = useContext(ContatoContext);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>@Contatinhos</Text>

      <FlatList
        data={ contatos }
        renderItem={ ({item}) => {
          return (
            <View style={{ marginBottom: 8 }}><Text>{item}</Text></View>
          )
        } }
      />

      <Button title='Adicionar Contato' onPress={ () => {navigation.navigate('Novo')} } />
    </View>
  )
}

export default Home;