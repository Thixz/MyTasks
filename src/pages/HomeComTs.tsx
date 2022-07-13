import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, FlatList} from 'react-native';
import {SkillCard} from '../components/SkillCard';
import {StyledButton} from '../components/StyledButton';

interface SkillData {
  // Para tipar um objeto devemos abrir uma interface onde iremos adicionar as propriedades e os tipos de cada propriedade. Como se fosse uma classe em C#
  id: string;
  name: string;
}

export const HomeComTs = () => {
  const [newSkill, setNewSkill] = useState<string>('');
  const [listSkills, setListSkills] = useState<SkillData[]>([]); // Aqui basicamente estamos definindo o tipo da propriedade listSkills como sendo do tipo Array de SkillData.
  const [greeting, setGreeting] = useState<string>('');

  function handleAddNewSkill() {
    const data : SkillData = { // Aqui estamos criando um novo objeto do tipo SkillData que sera adicionado no array de SkillData abaixo
        id: String(new Date().getTime()),
        name:newSkill
    }
    setListSkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id:string){
    setListSkills(oldState => oldState.filter(
        skill => skill.id != id
    ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    currentHour >= 12
      ? setGreeting('Good Afternoon!')
      : setGreeting('Good Morning!');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Thiago!</Text>
      <Text style={[styles.title, {fontSize: 16, marginTop: 10}]}>
        {greeting}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <StyledButton title='Add' onPress={handleAddNewSkill} />
      <Text style={[styles.title, {marginVertical: 25}]}>My Skills</Text>
      <FlatList
        data={listSkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SkillCard name={item.name} 
        onPress = {() => handleRemoveSkill(item.id)}/>}
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
