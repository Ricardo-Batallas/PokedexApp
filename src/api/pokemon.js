import { API_URL } from "../utils/constants";

export const getPokemonDetail = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPokemonApi = async (nextUrl) => {
  try {
    const url = nextUrl ? nextUrl : `${API_URL}/pokemon/`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
