
import { useContext, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { ContatoContext } from '../contexts/ContatoContext';

const Novo = ({ navigation }) => {
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();

  const { adicionar } = useContext(ContatoContext);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Novo Contato" />
      </Appbar.Header>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <TextInput
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          keyboardType="phone-pad"
          label="Telefone"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
        />
        <Button
          onPress={() => {
            adicionar(nome, telefone);
            navigation.pop();
          }}>
          Salvar
        </Button>
      </ScrollView>
    </View>
  );
};

export default Novo;
