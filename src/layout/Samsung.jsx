import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/samsungs/Navbar";
import SamHome from "../components/samsungs/SamHome";
import SamFooter from "../components/samsungs/SamFooter";
import "../style/samsung.css"
function Samsung() {
  const location = useLocation();
  const isHome = location.pathname === "/collection/samsung";
  const isWatch = location.pathname.includes("/wearable")
  return (
    <>
      {!isWatch && <Navbar />}
      {isHome && <SamHome />}
      <div className="mt-21">
        <Outlet />
      </div>
      {!isWatch && <SamFooter />}
    </>
  );
}

export default Samsung;
