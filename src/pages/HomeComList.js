import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, FlatList} from 'react-native';
import {SkillCard} from '../components/SkillCard';
import {StyledButton} from '../components/StyledButton';

export const HomeComList = () => {
  const [newSkill, setNewSkill] = useState('');
  const [listSkills, setListSkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    setListSkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    currentHour >= 12 ? setGreeting('Good Afternoon!') : setGreeting('Good Morning!')
  }, []); // No primeiro parâmetro definimos uma função que será executada quando um ou mais objetos que adicionamos nos segundo parâmetro [] for alterado. Caso o array esteja vazio a função será executada
  //sempre no momento de carregamento da tela.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Thiago!</Text>
      <Text style={[styles.title, {fontSize: 16,marginTop:10}]}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill} //Podemos perceber que não estamos capturando a variável de texto para passar como parâmetro para a função. Isso porque o Native já entende oq queremos fazer!
      />
      <StyledButton onPress={handleAddNewSkill} />
      <Text style={[styles.title, {marginVertical: 25}]}>My Skills</Text>
      <FlatList
        data={listSkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
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