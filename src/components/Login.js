import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.Text}>UserName: </Text>
        <TextInput style={styles.TextInput} defaultValue="Email/Phone" />
      </View>
      <View style={styles.input}>
        <Text style={styles.Text}>Password: </Text>
        <TextInput style={styles.TextInput} defaultValue="password" />
      </View>
      <View style={styles.input}>
        <Button title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 1,
    margin: 40,
  },
  input: {
    flexDirection: 'row',
    width: 200,
    height: 30,
    justifyContent: 'center',
    margin: 2,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'gray',
    margin: 4,
    width: 120,
    textAlign: 'center',
  },
  Text: {
    width: 80,
    paddingTop: 5,
  },
  button: {
    flexDirection: 'row',
    borderRadius: 3,
    width: 200,
    height: 70,
    paddingLeft: 40,
    margin: 4,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
