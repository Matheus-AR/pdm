import { useContext, useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { ContatoContext } from '../contexts/ContatoContext';

const Editar = ({ route, navigation }) => {
  const { contatoId } = route.params;
  const { buscar, atualizar } = useContext(ContatoContext);

  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();

  useEffect(() => {
    buscar(contatoId).then((contato) => {
      setNome(contato.nome);
      setTelefone(contato.telefone);
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Editar Contato" />
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
            atualizar(contatoId, nome, telefone);
            navigation.pop();
          }}>
          Salvar
        </Button>
      </ScrollView>
    </View>
  );
};

export default Editar;