import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProdutoList from '../screens/ProdutoList';
import ProdutoDetail from '../screens/ProdutoDetail';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listagem" component={ProdutoList} />
      <Stack.Screen name="Grid" component={ProdutoDetail} />
    </Stack.Navigator>
  );
};

export default MainNavigator;