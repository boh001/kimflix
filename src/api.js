import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});

const key = process.env.API_KEY || "cc3c4c93cdb074d2a573c0a20bbc221b";

export const moviesApi = {
  nowPlaying: () => api.get(`now_playing?api_key=${key}&language=en-US`),
  popular: () => api.get(`popular?api_key=${key}&language=en-US`),
  latest: () => api.get(`latest?api_key=${key}&language=en-US`),
  upcoming: () => api.get(`upcoming?api_key=${key}&language=en-US`),
};
