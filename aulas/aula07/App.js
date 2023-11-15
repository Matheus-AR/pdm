import { NavigationContainer } from '@react-navigation/native';

import Main from './routes/Main';
import AuthProvider from './contexts/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;