import React from 'react';
import {StatusBar} from 'react-native';

// O que não é exportado por default fica entre chaves e o default fora das chaves. Neste caso nem Home nem nome são default no arquivo Home.js
// Também não exportando por default podemos utilizar o auto import do VS CODE
import {Home, nome} from './src/pages/Export_Fragment';
import {Home2} from './src/pages/Home';
import {HomeComList} from './src/pages/HomeComList';
import { HomeComTs } from './src/pages/HomeComTs';

// Status bar hidden para esconder a status bar :)

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <HomeComTs />
    </>
  );
}
