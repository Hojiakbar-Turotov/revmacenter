import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Reviews from "../pages/reviews";
import Doctors from "../pages/doctors";
import Services from "../pages/services";
import Layout from "../components/Layout";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "reviews", element: <Reviews /> },
            { path: "doctors", element: <Doctors /> },
            { path: "services", element: <Services /> },
        ],
    },
]);
