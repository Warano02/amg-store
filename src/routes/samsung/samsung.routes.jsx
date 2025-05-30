import SamBu from "../../components/samsungs/SamBu";
import SamPhone from "../../components/samsungs/SamPhone";
import SamProduct from "../../components/samsungs/SamProduct";
import SamTab from "../../components/samsungs/SamTab";
import SamTv from "../../components/samsungs/SamTv";
import Samsung from "../../layout/Samsung";

export const samsungRoutes =[ {
    path: "samsung",
    element: <Samsung />,
    children: [
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
}];
