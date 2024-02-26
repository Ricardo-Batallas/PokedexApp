
import React from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Account() {

  const username ="PULSO LOGICO"
  const userDescription = "Soy un entusiasta de la tecnología y amante de la programación. Explorando el mundo del desarrollo móvil con React Native.";
  const imageUrl=require("../../assets/images/splash.png")

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={ imageUrl } style={styles.avatar} />
      </View>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.userDescription}>{userDescription}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', 
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, 
  },  
  avatar: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 18,
    color: '#ffffff', 
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', 
    marginBottom: 20,
  },
  userDescription: {
    padding: 30,
    textAlign: 'center',
    fontSize: 16,
    color: '#cadffb', 
  },
  button: {
    backgroundColor: '#2980b9', 
    padding: 10,
    marginTop:50,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 16,
  },
});
