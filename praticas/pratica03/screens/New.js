import { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';

const New = () => {

  const [isEnabled, setIsEnabled ] = useState(false);
  const alternarSwitch = () => {
    setIsEnabled(previousState => !previousState);
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.appBar}>
        <Text style={estilos.appBarTitle}>New</Text>
      </View>
      <TextInput style={estilos.input} placeholder='nome' keyboardType='default' />
      <Switch
        onValueChange={alternarSwitch}
        value={isEnabled}
      />
      <Text>Status</Text>
      <Button title={'Salvar'}/>
    </View>
  );
};
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  appBar: {
    backgroundColor: 'blue',
    padding: 16,
    alignItems: 'center',
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    marginTop: 8,
  }
})
export default New;