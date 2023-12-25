import { Outlet } from "react-router-dom";
import Footer from "../pages/SharedComponents/Footer";
import Navbar from "../pages/SharedComponents/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Main;
