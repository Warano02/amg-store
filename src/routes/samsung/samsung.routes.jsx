import SamBu from "../../components/samsungs/SamBu";
import SamPhone from "../../components/samsungs/SamPhone";
import SamProduct from "../../components/samsungs/SamProduct";
import SamTab from "../../components/samsungs/SamTab";
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
            path: "tablet/:id",
            element: <SamTab />,
        },
        {
            path: "product",
            element: <SamProduct />,
        },
    ],
}];
