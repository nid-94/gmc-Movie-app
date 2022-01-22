import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, inputSearch, rating }) {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}>
            {movies
                ?.filter(
                    (movie) =>
                        movie.title
                            .toUpperCase()
                            .includes(inputSearch.toUpperCase()) &&
                        movie.rate <= rating
                )
                .map((el) => (
                    <MovieCard movie={el} />
                ))}
        </div>
    );
}

export default MovieList;
