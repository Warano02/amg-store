import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/samsungs/Navbar";
import SamHome from "../components/samsungs/SamHome";
import SamFooter from "../components/samsungs/SamFooter";

function Samsung() {
  const location = useLocation();
  const isHome = location.pathname === "/collection/samsung";
  return (
    <>
      <Navbar />
      {isHome && <SamHome />}
       <Outlet />
      <SamFooter />
    </>
  );
}

export default Samsung;
