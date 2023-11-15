import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Login</Text>
      <TextInput
        style={estilos.input}
        placeholder="email"
        keyboardType="email-address"
      />
      <TextInput
        style={estilos.input}
        placeholder="senha"
        secureTextEntry={true}
      />
      <Button title={'Entrar'} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default Login;
