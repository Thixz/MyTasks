import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, ScrollView} from 'react-native';
import {SkillCard} from '../components/SkillCard';
import {StyledButton} from '../components/StyledButton';

//Active Opacity de Touchable Opacity altera a quantidade de opacidade quando é clicado

// const [newSkill,setNewSkill] = useState() . Primeiro declaramos o nome do estado e em seguida o método que irá alterar aquele estado. Dentro do método useState podemos
//definir o estado inicial.

// Margin vertical e horizon colocam margem dos dois lados do componente

// DENTRO DO RETURN FICAM OS CÓDIGOS JSX E FORA FICAM OS CÓDIGOS JAVASCRIPT COMO FUNÇÕES,VARIÁVEIS, ETC

// Por convenção as funções que são disparadas por uma interação do usuário como o clique de um botão, carregam o nome handle na frente

// No ultimo componente estamos abrindo uma interação javascript dentro do código JSC com { }. Lá dentro estamos pegando todos os itens de dentro da Lista de Skills , recuperando
// esse item e então para cada item criando um touchable opacity com esse item. Acho que seria melhor usar uma lista, mas fica o ensinamento

export const Home2 = () => {
  const [newSkill, setNewSkill] = useState('');
  const [listSkills, setListSkills] = useState([]);

  function handleAddNewSkill() {
    setListSkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Thiago!</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <StyledButton onPress={handleAddNewSkill} />
      <Text style={[styles.title, {marginVertical: 25}]}>My Skills</Text>
      <ScrollView>
        {listSkills.map(skill => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#121015',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
});
