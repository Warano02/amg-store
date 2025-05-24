import Samsung from "../../layout/Samsung";
import ProductList from "../../pages/tecno/ProductList";

export const samsungRoutes =[ {
    path: "samsung",
    element: <Samsung />,
    children: [
        {
            path: "product-list",
            element: <ProductList />,
        }
    ],
}];
