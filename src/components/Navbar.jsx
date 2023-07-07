import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };
    return (
        <nav>
            <div>
                <h2 onClick={navigateHome}>WATCH&CHilLL</h2>
            </div>
            <div className="navlinks">
                <NavLink
                    to={"/"}
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                >
                    Home
                </NavLink>
                <NavLink
                    to={"/categories"}
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                >
                    Categories
                </NavLink>
                <NavLink
                    to={"/about"}
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                >
                    About Us
                </NavLink>
            </div>
            <div className="user">
                <p>User</p>
                <button>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
