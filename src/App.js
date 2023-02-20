import { useEffect } from "react";


const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=5750106e';
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
        <h1>App</h1>
    );
}

export default App;