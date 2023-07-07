import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Movie = () => {
    const param = useParams();
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate("/");
    };
    return (
        <>
            <div className="content">
                <h1>{param.title}</h1>
            </div>
            <div className="center">
                <h2>Hello, you choose "Comedy 2".</h2>
                <button onClick={navigateHandler}>Go Back to Home</button>
            </div>
        </>
    );
};

export default Movie;
