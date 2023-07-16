import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import TopRated from "../pages/TopRated";

const Main = () => {
    return (
        <section className="bg-[#252525]">
            <div className="h-screen">
                <Navbar />
                <TopRated />
            </div>
            <div className="absolute">
                <Outlet />
            </div>
        </section>
    );
};

export default Main;
