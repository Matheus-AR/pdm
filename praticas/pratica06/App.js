import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './routes/MainNavigator';
import ContatoProvider from './contexts/ContatoContext';

const App = () => {
  return (
    <NavigationContainer>
      <ContatoProvider>
        <MainNavigator />
      </ContatoProvider>
    </NavigationContainer>
  )
}

export default App;