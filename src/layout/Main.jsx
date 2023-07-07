import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <>
            <section>
                <Navbar />
            </section>
            <section>
                <Outlet />
            </section>
        </>
    );
};

export default Main;
