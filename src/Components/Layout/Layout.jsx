import React from 'react';
import Navbar from '../Navbar/Navbar'; // Importing the Navbar component
import Footer from '../Footer/Footer'; // Importing the Footer component
import { Outlet } from 'react-router-dom'; // Importing the Outlet component from react-router-dom

export default function Layout() {
    return (
        <>
            {/* Navbar */}
            <Navbar /> {/* Rendering the Navbar component */}

            {/* Routing Here */}
            <Outlet></Outlet> {/* Outlet component is used to render nested routes */}

            {/* Footer */}
            <Footer /> {/* Rendering the Footer component */}
        </>
    );
}
