import {View, Text} from 'react-native';
import React from 'react';

// Vamos supor que queremos retornar apenas uma view com um item fora. Nesse caso podemos usar o fragment <> para "encapsular" nosso código e retornar correctmente
export function Home() {
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>React Native</Text>
      </View>
      <Text>Ignite</Text>
    </>
  );
}

// Quando não exportamos a função por default podemos abrir a possibilidade de exportar mais de uma coisa do arquivo como por exemplo aqui onde estamos
// exportando a função Home que retorna nosso código JSX e em baixo a constante nome com o valor Thiken. Ambos retornos serão importados de forma diferente
// e utilizados no arquivo App.js
export const nome = 'Thiken';
