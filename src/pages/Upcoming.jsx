import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Upcoming = () => {
    const data = useLoaderData();
    const popularMovies = data.results;
    return (
        <div className=" px-20 py-14 bg-[#252525]">
            <h1 className=" text-white text-3xl font-mono underline">
                UPCOMING MOVIES
            </h1>
            <div className="grid grid-cols-10 justify-center items-center mt-7 gap-5">
                {popularMovies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Upcoming;
export const loader = async () => {
    const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=a41483e2ded489f406ac40a91a34bf0e&language=en-US"
    );

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
    }
};
