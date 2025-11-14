import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import SamBu from "../components/samsungs/SamBu";
import SamHome from "../components/samsungs/SamHome";
import SamPhone from "../components/samsungs/SamPhone";
import SamProduct from "../components/samsungs/SamProduct";
import SamTab from "../components/samsungs/SamTab";
import SamTv from "../components/samsungs/SamTv";
import Samsung from "../layout/Samsung";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Samsung />,
        children: [
            {
                element: <SamHome />,
                index: true
            },
            {
                path: "phone/:id",
                element: <SamPhone />,
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
                element: <SamTab />,
            },
            {
                path: "tv/:id",
                element: <SamTv />,
            },
            {
                path: "product",
                element: <SamProduct />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);
