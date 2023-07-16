import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Searched = () => {
    const data = useLoaderData();
    const searchMovies = data.results;
    const searchKey = useParams();
    return (
        <section className="h-screen bg-[#252525]">
            <Navbar />
            <div className="h-fit px-20 py-14">
                {searchMovies.length > 0 && (
                    <>
                        <h1 className=" text-white text-3xl font-mono">
                            Search results for '{searchKey.title}'
                        </h1>
                        <div className="grid grid-cols-10 justify-center items-center mt-7 gap-5">
                            {searchMovies.map((movie) => (
                                <Card key={movie.id} movie={movie} />
                            ))}
                        </div>
                    </>
                )}
                {searchMovies.length < 1 && (
                    <h1 className=" text-white text-3xl font-mono">
                        There are no results for '{searchKey.title}'
                    </h1>
                )}
            </div>
        </section>
    );
};

export default Searched;

export const loader = async ({ params }) => {
    const response = await fetch(
        `https://api.themoviedb.org//3/search/movie?api_key=a41483e2ded489f406ac40a91a34bf0e&language=en-US&query=${params.title}`
    );
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
    }
};
