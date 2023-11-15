import { useContext } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Appbar, List, IconButton, FAB } from 'react-native-paper';

import { ContatoContext } from '../contexts/ContatoContext';

const Home = ({ navigation }) => {
  const { contatos, remover } = useContext(ContatoContext);
  const handleRemover = (id) => {
    Alert.alert(
      'Remover', 'Deseja remover este contato?',
      [{text: 'Cancelar', style: 'cancel'}, {text: 'Excluir', onPress: () => {remover(id)}}]
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title='@Contato' />
      </Appbar.Header>

      <ScrollView>
        {contatos.map((item, index) => (
          <List.Item
            key={index}
            title={item.nome}
            description={item.telefone}
            right={(props) => (<IconButton {...props} icon='delete' onPress={() => {handleRemover(item.id)} } />)}
            onPress={() => navigation.navigate('Editar', {contatoId: item.id})}
          />
        ))}
      </ScrollView>

      <FAB icon='plus' style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }} onPress={() => navigation.navigate('Novo')} />
    </View>
  )
}

export default Home;