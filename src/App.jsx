import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AppContextProvider } from "./provider/AppContextProvider";
import { ShopContextProvider } from "./provider/ShopContextProvider";

function App() {
  return (
    <AppContextProvider>
      <ShopContextProvider>
        <RouterProvider router={router} />
      </ShopContextProvider>
    </AppContextProvider>
  )
}

export default App
