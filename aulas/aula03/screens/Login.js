import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Login</Text>
      <TextInput style={estilos.input} placeholder="Email"
      keyboardType="email-address"/>
      <TextInput style={estilos.input} placeholder="Senha" secureTextEntry={true}/>
      <Button  title="Entrar" color={'red'} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'snow',
    padding: 16,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    lineHeight: 48,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 16,
  },
  botao: {
    border: 15,
  }
});

export default Login;
