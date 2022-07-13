import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

interface ButtonProps extends TouchableOpacityProps {
  // Aqui estamos criando uma interface que extende as propriedades de um TouchaBleOpapacity, ou seja, esse tipo ButtonProps ira conter
  // todas as propriedades que um touchableOpacity contém. E além disso estamos adicionar a propriedade title
  title: string;
}

export function StyledButton({title, ...rest}: ButtonProps) {
  // Aqui estamos dizendo que nosso componente StyleButton é do tipo ButtonProps e recebe um titulo e o ...rest funciona como uma propriedade que está dizendo que tudo o que for de um touchable
  // opacity pode ser passado via parâmetro que esse touchable Opacity ira entender.
  //  E por esse motivo a função onPress está sendo passada no arquivo HomeComtsx e não aqui, pois ele já ira reconhecer
  // Poderiamos passar por exemplo o activeOpacity por parâmetro e arrancar daqui caso quisessemos
  // Ou seja, todas propriedades do TouchableOpacity padrão colocamos aqui do lado do componente enquanto as propriedades que podem ser dinâmicas como o titulo ou a função onPress é passado pela
  // "Pagina"
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.65} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
