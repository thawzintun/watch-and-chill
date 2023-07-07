import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const categories = [
        "Total",
        "Action",
        "Adventure",
        "Comedy",
        "Crime",
        "Drama",
        "Horror",
    ];
    return (
        <div className="categories">
            {categories.map((category, index) => (
                <Link
                    to={`/categories/${category}`}
                    key={index}
                    className="category"
                >
                    {category}
                </Link>
            ))}
        </div>
    );
};

export default Categories;
