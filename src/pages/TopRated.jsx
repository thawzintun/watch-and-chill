import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HeaderCard from "../components/HeaderCard";
import { useLoaderData } from "react-router-dom";

const TopRated = () => {
    const data = useLoaderData();
    const topRatedMovies = data.results;
    return (
        <div className="">
            <Splide
                options={{
                    type: "loop",
                    autoplay: true,
                    pagination: false,
                }}
                className=""
            >
                {topRatedMovies.map((movie) => (
                    <SplideSlide key={movie.id}>
                        <HeaderCard movie={movie} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default TopRated;

export const loader = async () => {
    const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=a41483e2ded489f406ac40a91a34bf0e&language=en-US"
    );

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
    }
};
