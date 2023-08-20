// Importing necessary styles and components


import React from 'react';
import FooterStyle from './Footer.module.css';

export default function Footer() {
    return (
        <>
            {/* Horizontal line separator */}
            <hr className={`${FooterStyle['horizental-line']}`} />

            {/* Footer section */}
            <footer className={`${FooterStyle['footer']}`}>
                <div className={`${FooterStyle['footer-content']}`}>
                    {/* Footer title */}
                    <h3>Contact</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, nesciunt autem non iste soluta temporibus mollitia numquam. In, nemo sed?</p> {/* Footer description */}

                    {/* Social media icons */}
                    <ul className={`${FooterStyle['socials']}`}>
                        <li>
                            {/* Facebook link */}
                            <a href="https://www.facebook.com/abdulrouf.essam.7/" target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li>
                            {/* GitHub link */}
                            <a href="https://github.com/" target='_blank'><i className="fa-brands fa-github"></i></a>
                        </li>
                        <li>
                            {/* Instagram link */}
                            <a href="https://www.instagram.com/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            {/* Twitter link */}
                            <a href="https://twitter.com/" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>

                {/* Footer bottom section */}
                <div className={`${FooterStyle['footer-bottom']}`}>
                    <p>
                        {/* Copyright information */}
                        Copyright &copy;2023 Abdulraouf Essam. Designed by (Ui/ Ux) <span>Searching</span>
                    </p>
                </div>
            </footer>
        </>
    );
}
