import React, { useState } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <Link
            to={`/detail/${movie.id}`}
            className="rounded-lg overflow-hidden relative"
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt=""
                    className="w-full h-64"
                />
            ) : (
                <img
                    src="https://movieeo.com/no-poster.png"
                    alt=""
                    className="w-full h-60"
                />
            )}
            <div className="dark-ov absolute"></div>
            <PlayCircleIcon
                className={`text-white w-14 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute ${
                    isHover ? "block" : "hidden"
                }`}
            />
        </Link>
    );
};

export default Card;
