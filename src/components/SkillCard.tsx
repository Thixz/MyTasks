import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

interface skillName extends TouchableOpacityProps {
  name: string;
}

export function SkillCard({name,...rest}: skillName) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={1} {...rest}>
      <Text style={styles.textSkill}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    marginVertical: 5,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
