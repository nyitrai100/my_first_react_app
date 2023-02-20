import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import './app.css';

import SearchIcon from './search.svg';


const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=5750106e';

const movie1={
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {

const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API}&s=${title}`);
        const data = await response.json();
        setMovies(data.search);
    }

    useEffect(() =>{
    searchMovies('Spiderman');

    }, []);

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">

                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            {
                movies?.length > 0
                 ?( 
                <div Name= "container">
                {movies.map((movie) => (
                    <MovieCard movie= {movie}/>
                ))}
                </div>
             ) :(
                <div className="empty">
                    <h2> No movies found</h2> 

                </div>
             )
            }

        

        </div>
    );
}

export default App;