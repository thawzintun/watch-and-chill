import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Detail = () => {
    return (
        <section className="bg-[#252525]">
            <Navbar />
            <Outlet />
        </section>
    );
};

export default Detail;
