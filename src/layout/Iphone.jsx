import { Outlet, useLocation } from "react-router-dom"
import IpNavbar from "../components/Iphone/IpNavbar"
import "/src/style/iphone.css"
import IB1 from "../components/Iphone/IB1"
import IpHome from "../components/Iphone/IpHome"
function Iphone() {
    const location=useLocation()
    const showBanner=location.pathname==="/collection/iphone"
  return (
    <>
    <IpNavbar/>
    {showBanner && <IB1/>}
    {showBanner && <IpHome/>}
    <Outlet/>
    </>
  )
}

export default Iphone