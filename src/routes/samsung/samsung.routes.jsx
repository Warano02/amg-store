import SamPhone from "../../components/samsungs/SamPhone";
import SamProduct from "../../components/samsungs/SamProduct";
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
            path: "product",
            element: <SamProduct />,
        },
    ],
}];
