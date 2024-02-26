import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons, loadPokemon } = props;

  const numColumns = 2;

  const loadMore = () => {
    loadPokemon();
    console.log("Cargando mas pokemons..");
    return;
  };

  renderItem = ({ item }) => <PokemonCard pokemon={item} />;

  return (
    <FlatList
      key={numColumns}
      numColumns={numColumns}
      data={pokemons}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={this.renderItem}
      onEndReached={loadMore}
      contentContainerStyle={styles.container}
      contentInsetAdjustmentBehavior="automatic"
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          color={"#AEAEAE"}
        />
      }
    />
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
