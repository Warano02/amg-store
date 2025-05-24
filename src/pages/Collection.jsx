import { Outlet, useLocation } from "react-router-dom"

function Collection() {
    const location = useLocation();
  const isExactCollection = location.pathname === '/collection';
  return (
    <div>
       {isExactCollection && <h1>Collection</h1>}
       <Outlet/>
    </div>
  )
}

export default Collection
