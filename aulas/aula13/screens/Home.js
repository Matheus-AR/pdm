
import { useContext, useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  FAB,
  IconButton,
  List,
} from 'react-native-paper';
import { ContatoContext } from '../contexts/ContatoContext';

const Home = ({ navigation }) => {
  const [carregando, setCarregando] = useState(false);

  const { contatos, listar, remover } = useContext(ContatoContext);

  useEffect(() => {
    setCarregando(true);
    setTimeout(() => listar().then(setCarregando(false)), 3000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="@Contatos" />
      </Appbar.Header>
      {carregando ? (
        <ActivityIndicator />
      ) : (
        <ScrollView style={{ flex: 1 }}>
          {contatos.map((contato) => (
            <List.Item
              key={contato.id}
              title={contato.nome}
              description={contato.telefone}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="delete"
                  onPress={() => remover(contato.id)}
                />
              )}
              onPress={() =>
                navigation.navigate('Editar', { contatoId: contato.id })
              }
            />
          ))}
        </ScrollView>
      )}
      <FAB
        icon={'plus'}
        onPress={() => navigation.navigate('Novo')}
        style={{ position: 'absolute', right: 0, bottom: 0, margin: 16 }}
      />
    </View>
  );
};

export default Home;