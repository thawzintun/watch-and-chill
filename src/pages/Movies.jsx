import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Movies = () => {
    const params = useParams();
    const movies = [
        {
            id: 1,
            category: "Action",
            name: "Action 1",
        },
        {
            id: 2,
            category: "Action",
            name: "Action 2",
        },
        {
            id: 3,
            category: "Adventure",
            name: "Adventure 1",
        },
        {
            id: 4,
            category: "Adventure",
            name: "Adventure 2",
        },
        {
            id: 5,
            category: "Comedy",
            name: "Comedy 1",
        },
        {
            id: 6,
            category: "Comedy",
            name: "Comedy 2",
        },
        {
            id: 7,
            category: "Crime",
            name: "Crime 1",
        },
        {
            id: 8,
            category: "Crime",
            name: "Crime 2",
        },
    ];
    const filterMovies = movies.filter(
        (movie) => movie.category === params.category
    );

    const navigate = useNavigate();
    const navigateHandler = (title) => {
        navigate(`/categories/${params.category}/${title}`);
    };
    return (
        <>
            <div className="content">
                <h1>{params.category} Movies</h1>
            </div>
            <div className="movies">
                {params.category === "Total" ? (
                    movies.map((movie) => (
                        <div className="movie" key={movie.id}>
                            <h3>{movie.name}</h3>
                            <button onClick={() => navigateHandler(movie.name)}>
                                View
                            </button>
                        </div>
                    ))
                ) : filterMovies.length !== 0 ? (
                    filterMovies.map((movie) => (
                        <div className="movie" key={movie.id}>
                            <h3>{movie.name}</h3>
                            <button onClick={() => navigateHandler(movie.name)}>
                                View
                            </button>
                        </div>
                    ))
                ) : (
                    <h2>Coming Soon...</h2>
                )}
            </div>
        </>
    );
};

export default Movies;
