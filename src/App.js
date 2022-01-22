import { useState } from "react";
import "./App.css";
import { moviesData } from "./Constants/data";
import MovieList from "./Components/MovieList";
import FilterByName from "./Components/FilterByName";
import AddMovie from "./Components/AddMovie";
import FilterByRate from "./Components/FilterByRate";

function App() {
    const [movies, setMovies] = useState(moviesData);
    const [inputSearch, setInputSearch] = useState("");
    const [rate, setRate] = useState(1);
    const add = (newMovie) => {
        setMovies([...movies, newMovie]);
    };

    return (
        <div className="App">
            <h2>Movie App</h2>

            <FilterByName
                inputsearch={inputSearch}
                setInputSearch={setInputSearch}
            />
            <FilterByRate isRating={false} rating={rate} setRating={setRate} />
            <MovieList
                movies={movies}
                inputSearch={inputSearch}
                rating={rate}
            />
            <AddMovie add={add} />
        </div>
    );
}

export default App;
