import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/categories",
                    element: <Categories />,
                },
                {
                    path: "/categories/:category",
                    element: <Movies />,
                },
                {
                    path: "/categories/:category/:title",
                    element: <Movie />,
                },
                {
                    path: "/about",
                    element: <About />,
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
