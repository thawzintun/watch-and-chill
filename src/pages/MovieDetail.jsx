import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";

const MovieDetail = () => {
    const movie = useLoaderData();
    console.log(movie);
    return (
        <section className="w-full h-screen relative">
            <div className="h-2/3 relative">
                <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt=""
                    className=" h-full w-full object-cover object-top"
                />
                <div className="dark-ov"></div>
            </div>
            <div className="w-1/2 m-auto p-4 flex items-start justify-center -mt-5 absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 card-bg">
                <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt=""
                    className="w-52 rounded-md"
                />
                <div className="text-white ms-4">
                    <h1 className=" text-4xl font-semibold">
                        {movie.original_title}
                    </h1>
                    <p className=" text-lg mb-2 ">
                        <span className=" text-red-500 font-medium">
                            Released On :{" "}
                        </span>
                        {movie.release_date}
                    </p>
                    <p className=" text-lg mb-2 ">
                        <span className=" text-red-500 font-medium">
                            Runtime :{" "}
                        </span>
                        {movie.runtime}mins
                    </p>
                    {movie.genres.map((g) => (
                        <span
                            className="font-bold me-2 bg-red-500 p-2 rounded-md"
                            key={g.id}
                        >
                            {g.name}
                        </span>
                    ))}

                    <h2 className=" text-justify text-xl my-4">
                        {movie.overview}
                    </h2>
                    <Link
                        className=" font-bold text-lg px-3 py-2 rounded-lg border-2 border-red-500"
                        to={movie.homepage}
                    >
                        <PlayIcon className="w-6 text-red-500 me-1 inline-block" />
                        Watch Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MovieDetail;

export const loader = async ({ params }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=a41483e2ded489f406ac40a91a34bf0e&language=en-US`
    );
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
    }
};
