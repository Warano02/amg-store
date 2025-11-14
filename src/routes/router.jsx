import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import SamBu from "../components/samsungs/SamBu";
import Home from "@/pages/Home";
import Phone from "@/pages/Phone";
import Product from "@/pages/Product";
import Tablet from "@/pages/Tablet";
import TV from "@/pages/TV";
import Layout from "../layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <Home />,
                index: true
            },
            {
                path: "phone/:id",
                element: <Phone />,
            },
            {
                path: "wearable/:id",
                element: <SamBu />,
            },
            {
                path: "audio/:id",
                element: <SamBu />,
            },
            {
                path: "tablet/:id",
                element: <Tablet />,
            },
            {
                path: "tv/:id",
                element: <TV />,
            },
            {
                path: "product",
                element: <Product />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);
