import axios from 'axios'
import {API_KEY, BASE_URL_SEARCH, BASE_URL_MOVIE, BASE_URL_TVSHOW} from '../config/api_config'


// Search
export const searchMovies = async (movieName, category) => {
  try{
    const response = await axios.get(`${BASE_URL_SEARCH}/${category}`, {
      params:{
        query: movieName,
        api_key: API_KEY
      }
    })

    const results = response.data.results
    if(results.length>0) {
      return results
    }else{ 
      return true
    }
  }catch(error){
    throw error
  }
}

// Fetch movies
export const getMovies = async (category) => {
  try{
    const response = await axios.get(`${BASE_URL_MOVIE}/${category}`, {
      params:{
        api_key: API_KEY
      }
    })

    const movies = response.data.results
    return movies
    
  }catch(error){
    throw error
  }
}

 // Fetch tv shows
export const getTv = async (category) => {
  try{
    const response = await axios.get(`${BASE_URL_TVSHOW}/${category}`, {
      params:{
        api_key: API_KEY
      }
    })

    const tv = response.data.results
    return tv
    
  }catch(error){
    throw error
  }
}