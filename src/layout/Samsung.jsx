import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/samsungs/Navbar";
import SamHome from "../components/samsungs/SamHome";
import SamFooter from "../components/samsungs/SamFooter";
import "../style/samsung.css"
function Samsung() {
  const location = useLocation();
  const isHome = location.pathname === "/collection/samsung";
  return (
    <>
      <Navbar />
      {isHome && <SamHome />}
     <div className="mt-21">
        <Outlet  />
     </div>
      <SamFooter />
    </>
  );
}

export default Samsung;
