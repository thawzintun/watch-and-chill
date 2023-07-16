import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const HeaderCard = ({ movie }) => {
    return (
        <>
            <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="h-full w-full object-cover left-50 top-50 brightness-75"
            />
            <div className="absolute z-20 text-white left-20 top-1/2 -translate-y-1/2 w-2/5">
                <h1 className="text-5xl font-extrabold">
                    {movie.original_title}
                </h1>
                <p className="font-medium text-lg my-3 text-justify">
                    {movie.overview}
                </p>
                <Link
                    to={`/detail/${movie.id}`}
                    className="text-black bg-white py-2 px-3 rounded-md font-medium text-lg mt-1 flex items-center w-fit"
                >
                    <PlayCircleIcon className="w-6 h-6" /> Watch Now
                </Link>
            </div>
        </>
    );
};

export default HeaderCard;
