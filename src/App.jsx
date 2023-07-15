import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Popular, { loader as popularLoader } from "./pages/Popular";
import { loader as topRatedLoader } from "./pages/TopRated";
import Upcoming, { loader as upcomingLoader } from "./pages/Upcoming";
import Detail from "./layout/Detail";
import MovieDetail, { loader as MovieDetailLoader } from "./pages/MovieDetail";

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
            element: <Detail />,
            children: [
                {
                    path: "/detail/:id",
                    element: <MovieDetail />,
                    loader: MovieDetailLoader,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
