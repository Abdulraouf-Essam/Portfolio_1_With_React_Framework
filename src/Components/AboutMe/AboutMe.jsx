// Importing necessary styles and components

import React, { useEffect } from 'react'

import AboutMeStyle from './AboutMe.module.css';

export default function AboutMe() {


    useEffect(() => {
        function increaseNumber() {
            // Get references to the HTML elements
            let number1 = document.getElementById('numberskill1');
            let number2 = document.getElementById('numberskill2');
            let number3 = document.getElementById('numberskill3');
            let number4 = document.getElementById('numberskill4');

            // Initialize counters for each number
            let counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0;

            // Start intervals to increase the numbers gradually
            let interval1 = setInterval(() => {
                // Check if the counter has reached 50
                if (counter1 === 50) {
                    // If reached, clear the interval to stop increasing
                    clearInterval(interval1);
                } else {
                    // If not reached, increment the counter and update the corresponding number element
                    counter1 += 1;
                    number1.innerHTML = counter1 + '%';
                }
            }, 40);


            // Repeat the previous steps 4 times
            let interval2 = setInterval(() => {
                if (counter2 === 75) {
                    clearInterval(interval2);
                } else {
                    counter2 += 1;
                    number2.innerHTML = counter2 + '%';
                }
            }, 27);

            let interval3 = setInterval(() => {
                if (counter3 === 70) {
                    clearInterval(interval3);
                } else {
                    counter3 += 1;
                    number3.innerHTML = counter3 + '%';
                }
            }, 28);

            let interval4 = setInterval(() => {
                if (counter4 === 60) {
                    clearInterval(interval4);
                } else {
                    counter4 += 1;
                    number4.innerHTML = counter4 + '%';
                }
            }, 32);

            // Cleanup function to clear all intervals when the component unmounts
            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
                clearInterval(interval4);
            };
        }

        // Call the increaseNumber function when the component mounts
        increaseNumber();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once after the initial render



    return (
        <>
            <section className={`${AboutMeStyle['cantainerSection']}`}>
                <div className='row'>
                    <div className='col-md-12 col-lg-6 m-auto'>
                        <h1 className={`${AboutMeStyle['heading']}`}>Languages</h1>
                        <div className={`${AboutMeStyle['horizontal-bars']}`}>
                            {/* Horizontal Bar 1 */}
                            <div className={`${AboutMeStyle['bar']}`}>
                                <div className={`${AboutMeStyle['info']}`}>
                                    <span>HTML</span>
                                </div>
                                <div className={`${AboutMeStyle['progress-line']} ${AboutMeStyle['html']}`}>
                                    <span></span>
                                </div>
                            </div>
                            {/* Horizontal Bar 2 */}
                            <div className={`${AboutMeStyle['bar']}`}>
                                <div className={`${AboutMeStyle['info']}`}>
                                    <span>CSS</span>
                                </div>
                                <div className={`${AboutMeStyle['progress-line']} ${AboutMeStyle['css']}`}>
                                    <span></span>
                                </div>
                            </div>
                            {/* Horizontal Bar 3 */}
                            <div className={`${AboutMeStyle['bar']}`}>
                                <div className={`${AboutMeStyle['info']}`}>
                                    <span>JS</span>
                                </div>
                                <div className={`${AboutMeStyle['progress-line']} ${AboutMeStyle['JS']}`}>
                                    <span></span>
                                </div>
                            </div>
                            {/* Horizontal Bar 4 */}
                            <div className={`${AboutMeStyle['bar']}`}>
                                <div className={`${AboutMeStyle['info']}`}>
                                    <span>jQuery</span>
                                </div>
                                <div className={`${AboutMeStyle['progress-line']} ${AboutMeStyle['jquery']}`}>
                                    <span></span>
                                </div>
                            </div>
                            {/* Horizontal Bar 5 */}
                            <div className={`${AboutMeStyle['bar']}`}>
                                <div className={`${AboutMeStyle['info']}`}>
                                    <span>React</span>
                                </div>
                                <div className={`${AboutMeStyle['progress-line']} ${AboutMeStyle['React']}`}>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12 col-lg-6'>
                        <h1 className={`${AboutMeStyle['heading']}`}>Soft Skills</h1>
                        <div className={`${AboutMeStyle['radial-bars']} row m-4`}>

                            {/* Radial Bar 1 */}
                            <div className={`${AboutMeStyle['skill']} col-6 mb-5`}>
                                <div className={`${AboutMeStyle['outer']}`}>
                                    <div className={`${AboutMeStyle['inner']}`}>
                                        <div className={`${AboutMeStyle['numberskill']}`} id='numberskill1'>

                                        </div>
                                    </div>
                                    <h5 className='text-center mt-4 text-black'>Creativity</h5>
                                </div>

                                <svg className={`${AboutMeStyle['svgAboutMe']}`} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stopColor="#e91e63" />
                                            <stop offset="100%" stopColor="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle className={`${AboutMeStyle['circlesvg1']}`} cx="80" cy="80" r="70" strokeLinecap="round" />
                                </svg>
                            </div>
                            {/* Radial Bar 2 */}
                            <div className={`${AboutMeStyle['skill']} col-6 mb-5`}>
                                <div className={`${AboutMeStyle['outer']}`}>
                                    <div className={`${AboutMeStyle['inner']}`}>
                                        <div className={`${AboutMeStyle['numberskill']}`} id='numberskill2'>

                                        </div>
                                    </div>
                                    <h5 className='text-center mt-4 text-black'>Communication</h5>
                                </div>

                                <svg className={`${AboutMeStyle['svgAboutMe']}`} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stopColor="#e91e63" />
                                            <stop offset="100%" stopColor="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle className={`${AboutMeStyle['circlesvg2']}`} cx="80" cy="80" r="70" strokeLinecap="round" />
                                </svg>
                            </div>

                            {/* Radial Bar 3 */}
                            <div className={`${AboutMeStyle['skill']} col-6 mt-5`}>
                                <div className={`${AboutMeStyle['outer']}`}>
                                    <div className={`${AboutMeStyle['inner']}`}>
                                        <div className={`${AboutMeStyle['numberskill']}`} id='numberskill3'>

                                        </div>
                                    </div>
                                    <h5 className='text-center mt-4 text-black'>Problem Solving</h5>
                                </div>

                                <svg className={`${AboutMeStyle['svgAboutMe']}`} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stopColor="#e91e63" />
                                            <stop offset="100%" stopColor="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle className={`${AboutMeStyle['circlesvg3']}`} cx="80" cy="80" r="70" strokeLinecap="round" />
                                </svg>
                            </div>
                            {/* Radial Bar 4 */}
                            <div className={`${AboutMeStyle['skill']} col-6 mt-5`}>
                                <div className={`${AboutMeStyle['outer']}`}>
                                    <div className={`${AboutMeStyle['inner']}`}>
                                        <div className={`${AboutMeStyle['numberskill']} text-black`} id='numberskill4'>

                                        </div>
                                    </div>
                                    <h5 className='text-center mt-4 text-black'>Teamwork</h5>
                                </div>

                                <svg className={`${AboutMeStyle['svgAboutMe']}`} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stopColor="#e91e63" />
                                            <stop offset="100%" stopColor="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle className={`${AboutMeStyle['circlesvg4']}`} cx="80" cy="80" r="70" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Education Section--> */}
            <section className={`${AboutMeStyle['cantainerSection2']}`}>
                <h2 className={`fw-bolder mb-4`}>Education</h2>
                {/* <!-- Education Card 1--> */}
                <div className={`${AboutMeStyle['Education-card']} card shadow border-0 rounded-4 mb-5`}>
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                <div className="bg-light p-4 rounded-4 shadow">
                                    <div className="text-secondary fw-bolder mb-2">2020 - 2024</div>
                                    <div className="mb-2">
                                        <div className="small fw-bolder">AUN</div>
                                        <div className="small text-muted">Assiut University</div>
                                    </div>
                                    <div className="fst-italic">
                                        <div className="small text-muted">Undergraduate</div>
                                        <div className="small text-muted">Computer Science</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div>I am a student at the Faculty of Computers and Information, Assiut
                                    University, third year.I am currently learning the Front-End and have
                                    reached framework (React)
                                    I participated in the ICPC competitions for two years 21 , 22 and we
                                    made an honorable effort.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Education Card 2--> */}
                <div className={`${AboutMeStyle['Education-card']} card shadow border-0 rounded-4 mb-5`}>
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                <div className="bg-light p-4 rounded-4 shadow">
                                    <div className="text-secondary fw-bolder mb-2">2019 - 2023</div>
                                    <div className="mb-2">
                                        <div className="small fw-bolder">ULA</div>
                                        <div className="small text-muted">Los Angeles</div>
                                    </div>
                                    <div className="fst-italic">
                                        <div className="small text-muted">Undergraduate</div>
                                        <div className="small text-muted">Computer Science</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                                    laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet
                                    officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro
                                    fuga.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
