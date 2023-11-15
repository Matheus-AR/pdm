import { NavigationContainer } from '@react-navigation/native';

import ProdutoProvider from './contexts/ProdutoContext';
import MainNavigator from './routes/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <ProdutoProvider>
        <MainNavigator />
      </ProdutoProvider>
    </NavigationContainer>
  );
};

export default App;