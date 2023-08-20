// Importing necessary styles and components

import React, { useEffect } from 'react'

import ProjectsStyle from './Projects.module.css';
import { Link } from 'react-router-dom';

export default function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    return (
        <>
            {/* Projects section */}
            <section className={`${ProjectsStyle['containerSection']}`}>
                <div className="row">

                    {/* Project 1 */}
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className={`${ProjectsStyle['card']}`}>
                            <div className={`${ProjectsStyle['cover']} ${ProjectsStyle['item-a']}`}>
                                <h1>Website1</h1> {/* Project title */}
                                <span className={`${ProjectsStyle['price']}`}>15/10/2022</span> {/* Project date */}
                                <div className={`${ProjectsStyle['card-back']}`}>
                                    <Link to="/project1">View demo & Code</Link> {/* Link to the project */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className={`${ProjectsStyle['card']}`}>
                            <div className={`${ProjectsStyle['cover']} ${ProjectsStyle['item-b']}`}>
                                <h1>Website2</h1> {/* Project title */}
                                <span className={`${ProjectsStyle['price']}`}>25/5/2023</span> {/* Project date */}
                                <div className={`${ProjectsStyle['card-back']}`}>
                                    <Link to="/project2">View demo & Code</Link> {/* Link to the project */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className={`${ProjectsStyle['card']}`}>
                            <div className={`${ProjectsStyle['cover']} ${ProjectsStyle['item-c']}`}>
                                <h1>Website3</h1> {/* Project title */}
                                <span className={`${ProjectsStyle['price']}`}>10/6/2023</span> {/* Project date */}
                                <div className={`${ProjectsStyle['card-back']}`}>
                                    <Link to="/project3">View demo & Code</Link> {/* Link to the project */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
