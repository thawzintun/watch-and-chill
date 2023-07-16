import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Popular, { loader as popularLoader } from "./pages/Popular";
import { loader as topRatedLoader } from "./pages/TopRated";
import Upcoming, { loader as upcomingLoader } from "./pages/Upcoming";
import MovieDetail, { loader as MovieDetailLoader } from "./pages/MovieDetail";
import Searched, { loader as searchLoader } from "./pages/Searched";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            loader: topRatedLoader,
            children: [
                {
                    index: true,
                    element: <Popular />,
                    loader: popularLoader,
                },
                {
                    path: "/upcoming",
                    element: <Upcoming />,
                    loader: upcomingLoader,
                },
            ],
        },
        {
            path: "/detail/:id",
            element: <MovieDetail />,
            loader: MovieDetailLoader,
        },
        {
            path: "search/:title",
            element: <Searched />,
            loader: searchLoader,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
