import { useEffect } from "react";

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

    const searchMovies = async (title) => {
        const response = await fetch(`${API}&s=${title}`);
        const data = await response.json();
        console.log(data.search);
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

            <div Name= "container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;