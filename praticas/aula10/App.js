
import AuthProvider from './contexts/AuthContext';
import ContatoProvider from './contexts/ContatoContext';
import MainNavigation from './routes/MainNavigation';

const App = () => (
  <AuthProvider> 
    <ContatoProvider>
      <MainNavigation />
    </ContatoProvider>
  </AuthProvider>
);

export default App;

