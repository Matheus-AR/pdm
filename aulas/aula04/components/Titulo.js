import { Text } from 'react-native';

const Titulo = (props) => {
  return (
    <Text style={{ fontSize:24, textAlign: 'center', fontWeight: 'bold', color:'purple' }}>{props.text}</Text>
  );
}

export default Titulo;