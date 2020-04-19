import React from 'react';
import {StyleSheet, Text, TextInput , View, Button} from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
      <View style={styles.input}><Text style={styles.Text}>UserName: </Text><TextInput style={styles.TextInput} defaultValue="Email/Phone"></TextInput></View>
      <View style={styles.input}><Text style={styles.Text}>Password: </Text><TextInput style={styles.TextInput} defaultValue="password"></TextInput></View>
      <View style={styles.input}><Button title='Login'  ></Button></View>
      <View style={styles.input}>
      <View style={styles.button}><Button  title='Forgot Password'  ></Button></View>
      <View style={styles.button}><Button style={styles.button} title='Signup'  ></Button></View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'top',
      borderRadius:"3px",
      margin: 40
    },
    input:{
      flexDirection:"row",
      width: 200,
      height: 30,
      justifyContent:'center',
      margin:2
    },
    TextInput:{
      borderWidth: "1px",
      borderColor: "gray",
      margin:"4px",
      width:120,
      textAlign: "center"
    },
    Text:{
      width: 80,
      paddingTop: 5
    },
    button:{
      flexDirection:"row",
      borderRadius: "3px",
      width: 100,
      height: 25,
      paddingLeft: 40,
      margin:4,
      justifyContent:"center",
      alignContent:"center"
    }
  });