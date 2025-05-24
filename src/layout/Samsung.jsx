import { Outlet } from "react-router-dom"
import Navbar from "../components/samsungs/Navbar"

function Samsung() {
    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    )
}

export default Samsung
