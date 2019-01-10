import axios from "axios";

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=5fb27ee2362c619dc78fe12b56540c4e'
})