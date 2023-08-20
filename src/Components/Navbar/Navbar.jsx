import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarStyle from './Navbar.module.css';

export default function Navbar() {

    // Function will execute on click of button
    const DownloadCV = () => {
        // using Java Script method to get PDF file
        fetch('Abdulraouf Essam CV.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Abdulraouf Essam CV.pdf';
                alink.click();
            })
        })
    }


    const [isNavOpen, setIsNavOpen] = useState(false); // State to track whether the navigation menu is open or closed

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // Function to toggle the navigation menu state
    };

    const closeNav = () => {
        setIsNavOpen(false); // Function to close the navigation menu
    };

    const ClickButtomCV = () => {
        closeNav();
        DownloadCV();
    };



    return (
        <>
            <nav className={`${NavbarStyle['navbar']} navbar navbar-expand-lg navbar-light position-fixed top-0 start-0 end-0 px-5`}>
                <div className="container px-3">
                    <Link className={`${NavbarStyle['text-gradient']} navbar-brand fs-2`} to="/" onClick={closeNav}>
                        <span className={`${NavbarStyle['first-Letter']} fs-1`}>A</span>bdulraouf
                    </Link>

                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item active">
                                <Link className={`${NavbarStyle['nav-link']} ${NavbarStyle['text-gradient']}`} to="/" onClick={closeNav}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${NavbarStyle['nav-link']} ${NavbarStyle['text-gradient']}`} to="/aboutme" onClick={closeNav}>
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${NavbarStyle['nav-link']} ${NavbarStyle['text-gradient']}`} to="/myprojects" onClick={closeNav}>
                                    My Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${NavbarStyle['nav-link']} ${NavbarStyle['text-gradient']}`} to="/contactme" onClick={closeNav}>
                                    Contact Us
                                </Link>
                            </li>
                            {/* Download CV */}
                            <li className={`${NavbarStyle['Download-CV']}`}>
                                <button className={`px-3 py-1 rounded`} onClick={ClickButtomCV}>
                                    Download CV
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
