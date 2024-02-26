import { SafeAreaView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import PokemonListFavorite from "../components/PokemonListFavorite";
import { getPokemonApi, getPokemonDetail } from "../api/pokemon";

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const favoriteIds = [1,2,3,4,5]; // IDs de tus Pokémon favoritos

  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonDetail(pokemon.url);
        if (favoriteIds.includes(pokemonDetail.id)) { // Solo añade a los Pokémon favoritos
          pokemonsArray.push({
            id: pokemonDetail.id,
            name: pokemonDetail.name,
            type: pokemonDetail.types[0].type.name,
            order: pokemonDetail.order,
            image: pokemonDetail.sprites.other["official-artwork"].front_default,
          });
        }
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error("Error loading pokemons", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokemonListFavorite pokemons={pokemons} loadPokemon={loadPokemon} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

