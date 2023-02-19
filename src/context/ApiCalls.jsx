import React from "react";
import axios from 'axios'
import { apiKey } from "../config/apiKey";
export const ApiContext = React.createContext()

export const ApiProvider = ({children}) => {
    const getPopular = () => {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    }

    const searchMovie = (query) => {
        return axios.get(`
        https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${query}&page=1`)
    }

    return(
        <ApiContext.Provider value={{
            getPopular,
            searchMovie
        }
        }>
            {children}
        </ApiContext.Provider>
    )
}