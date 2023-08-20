// Importing necessary styles and components

import React from 'react';
import DetailsOfProjectStyle from './DetailsOfProject.module.css';

export default function Project2() {
    return (
        <>
            {/* Project details section */}
            <section className={`${DetailsOfProjectStyle['detailsSection']}`}>
                <div className={`${DetailsOfProjectStyle['content']}`}>
                    <div className={`${DetailsOfProjectStyle['continerDetails']}`}>
                        {/* Project image */}
                        <img className={`${DetailsOfProjectStyle['item']}`} src={process.env.PUBLIC_URL + '/Images/website2.png'} />

                        <div>
                            {/* Project title */}
                            <h4 className={`${DetailsOfProjectStyle['text']}`}>website 2</h4>

                            {/* Project description */}
                            <h5 className={`${DetailsOfProjectStyle['subtext']}`}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,
                            </h5>

                            {/* Technologies used */}
                            <div className={`${DetailsOfProjectStyle['technologies']}`}>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JS</span>
                                <span>JQuery</span>
                                <span>bootstrap</span>
                                <span>React</span>
                            </div>

                            {/* Project pricing */}
                            <div className={`${DetailsOfProjectStyle['priceing']}`}>
                                <a href="https://github.com/" target='_blank'>Github <i className="fa-brands fa-github"></i></a> {/* Link to the GitHub repository for the project */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
