import { Outlet } from "react-router-dom";
import NavBar from "../componets/NavBar";
import React from 'react'; 

const Layout = () => {

    console.log("Cargo el layout");


    return (
        <>
            <NavBar />
            <Outlet /> {/* Esto es donde las rutas hijas se renderizan */}
        </>
    );
};

export default Layout;
