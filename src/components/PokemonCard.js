import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
} from "react-native";
import { getColorByPokemonType } from "../utils/getColor";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const pokemonColor = getColorByPokemonType(pokemon.type);

  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const [modalVisible, setModalVisible] = useState(false);

  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${pokemon.name}`);
    console.log(pokemon);
    setModalVisible(true);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
        <View style={[styles.modalView, { backgroundColor: 'rgba(0, 0, 0, 0.85)' }]}>
          <Text style={styles.modalText}>#{`${pokemon.order}`.padStart(3, 0)} - {pokemon.name}</Text>
          <Image source={{ uri: pokemon.image }} style={styles.modalImage} onError={(error) => console.log(error)}
/>
            <Text style={styles.modalTextDescription}>Tipo de Pokemon: {pokemon.type}</Text>
            <TouchableWithoutFeedback
              onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.modalbtnCerrarStyle}>Cerrar</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>

      <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={bgStyles}>
              <Text style={styles.number}>
                #{`${pokemon.order}`.padStart(3, 0)}
              </Text>
              <Text style={styles.name}>{pokemon.name}</Text>
              <Image source={{ uri: pokemon.image }} style={styles.image} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 150,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#535b61",
    fontSize: 11,
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    textTransform: "capitalize",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "white",
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  modalTextDescription: {
    color: "white",
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalbtnCerrarStyle:{
    backgroundColor:'rgba(0, 0, 0, 0.60)',
    padding:20,
    width:200,
    borderRadius:70,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    shadowColor: "white",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Hace que la imagen sea circular
    marginBottom: 15,
  },
  
});
