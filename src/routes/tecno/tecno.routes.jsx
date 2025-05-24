import Tecno from "../../layout/Tecno";
import ProductList from "../../pages/tecno/ProductList";

export const tecnoRoutes =[ {
    path: "tecno",
    element: <Tecno />,
    children: [
        {
            path: "product-list",
            element: <ProductList />,
        }
    ],
}];
