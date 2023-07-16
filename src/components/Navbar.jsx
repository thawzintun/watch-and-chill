import { NavLink, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
    const [searchKey, setSearchKey] = useState("");
    const navigate = useNavigate();
    const searchHandler = (e) => {
        e.preventDefault();
        searchKey && navigate(`/search/${searchKey}`);
    };
    return (
        <nav className="flex items-center justify-between text-white bg-black px-10 py-4">
            <NavLink className=" text-3xl font-bold font-mono" to={"/"}>
                WATCH&CHiLL
            </NavLink>
            <div className="flex items-center space-x-5 text-xl font-medium">
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive ? " text-blue-400" : ""
                    }
                >
                    Popular
                </NavLink>
                <NavLink
                    to={"/upcoming"}
                    className={({ isActive }) =>
                        isActive ? " text-blue-400" : ""
                    }
                >
                    Upcomings
                </NavLink>
            </div>
            <form className="flex items-center" onSubmit={searchHandler}>
                <input
                    type="text"
                    name=""
                    id=""
                    className="text-xl bg-transparent border-b border-slate-300 focus:outline-none"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <button>
                    <MagnifyingGlassIcon className=" w-6 h-6" />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;
