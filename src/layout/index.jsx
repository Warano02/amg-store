import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Footer from "@/components/Footer";
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isWatch = location.pathname.includes("/wearable")
  return (
    <>
      {!isWatch && <Navbar />}
      {isHome && <Home />}
      <div className="mt-21">
        <Outlet />
      </div>
      {!isWatch && <Footer />}
    </>
  );
}

export default Layout;
