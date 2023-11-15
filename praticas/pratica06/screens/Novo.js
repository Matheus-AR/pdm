import { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';

import { ContatoContext } from '../contexts/ContatoContext';


const Novo = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const { adicionar } = useContext(ContatoContext);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{ marginVertical: 12, padding: 12 }}
        placeholder='Nome'
        value={nome}
        onChangeText={ (text) => setNome(text) }
      />

      <Button title='Salvar' onPress={ () => {
        adicionar(nome);
        navigation.navigate('Home');
      } } />
    </View>
  )
}

export default Novo;