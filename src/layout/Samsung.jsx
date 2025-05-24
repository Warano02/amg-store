import { Outlet } from "react-router-dom"
import Navbar from "../components/samsungs/Navbar"
import SamHome from "../components/samsungs/SamHome"

function Samsung() {
    return (
        <>
            <Navbar/>
            <SamHome/>

            <Outlet />
        </>
    )
}

export default Samsung
