import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AppContextProvider } from "./provider/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  )
}

export default App
