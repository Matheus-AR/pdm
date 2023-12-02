import { useContext, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, FAB, IconButton, List } from 'react-native-paper';
import { AuthContext } from '../contexts/AuthContext';
import { ContatoContext } from '../contexts/ContatoContext';

const Home = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const { contatos, listar, remover } = useContext(ContatoContext);

  useEffect(() => {
    listar();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="@Contatos" />
        <Appbar.Action icon={'exit-to-app'} onPress={() => logout()} />
      </Appbar.Header>
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
      <FAB
        icon={'plus'}
        onPress={() => navigation.navigate('Novo')}
        style={{ position: 'absolute', right: 0, bottom: 0, margin: 16 }}
      />
    </View>
  );
};

export default Home;
