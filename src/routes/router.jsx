import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
 import Home from "../pages/Home";
import Collection from "../pages/Collection";
import { tecnoRoutes } from "./tecno/tecno.routes";
import { samsungRoutes } from "./samsung/samsung.routes";
import { appleRoutes } from "./apple/apple.routes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/collection",
        element: <Collection />,
        children: [
            ...tecnoRoutes, ...samsungRoutes,...appleRoutes
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
