import { useContext } from 'react';
import { View, FlatList, Pressable, Text, StyleSheet} from 'react-native';

import { ProdutoContext } from '../contexts/ProdutoContext';

const ProdutoList = ({ navigation }) => {
  const { produtos } = useContext(ProdutoContext);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.productItem} onPress={() => {navigation.navigate('Grid', {produtoId: item.id})}}>
            <Text>{item.nome}</Text>
            <Text>{item.preco}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default ProdutoList;