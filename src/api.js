import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});
const tvApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/",
});
const key = process.env.API_KEY || "cc3c4c93cdb074d2a573c0a20bbc221b";

export const popular = () => {
  return movieApi.get(`popular?api_key=${key}&language=en-US`);
};
export const latest = () => {
  return movieApi.get(`latest?api_key=${key}&language=en-US`);
};
export const nowPlaying = () => {
  return movieApi.get(`now_playing?api_key=${key}&language=en-US`);
};
export const upcoming = () => {
  return movieApi.get(`upcoming?api_key=${key}&language=en-US`);
};
