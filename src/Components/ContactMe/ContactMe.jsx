// Importing necessary styles and components

import React, { useEffect, useState } from 'react'

import { useFormik } from 'formik';
import * as Yup from 'yup';

import ContactMeStyle from './ContactMe.module.css';


export default function ContactMe() {

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'), // Validation rule for the name field
        email: Yup.string().required('Email is required').matches(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            'Invalid email address. It should be a valid email address.'
        ), // Validation rule for the email field
        phone: Yup.string().required('Phone number is required').matches(
            /^[0-9]{11}$/,
            'Phone number is not valid. It should be a 11-digit number.'
        ), // Validation rule for the phone field
        message: Yup.string().required('Message is required'), // Validation rule for the message field
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        }, // Initial values for the form fields
        validationSchema, // Apply the validation schema to the form
        onSubmit: (values) => {
            console.log(values); // Handle form submission (currently logging the form values to the console)
        },
    });

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    return (
        <>
            <main className="pt-5 mt-5">
                {/* <!-- Page content--> */}
                <section className="py-5">
                    <div className="container px-5">
                        {/* <!-- Contact form--> */}
                        <div className={`${ContactMeStyle['bg-cont']}  rounded-4 py-5 px-4 px-md-5`}>
                            <div className="text-center mb-5">
                                <div className={`${ContactMeStyle['feature']} ${ContactMeStyle['bg-gradient-primary-to-secondary']} bg-primary text-white rounded-3 mb-3`}>
                                    <i className="fa-solid fa-envelope"></i></div>
                                <h1 className="fw-bolder">Get in touch</h1>
                                <p className={`${ContactMeStyle['lead']} fw-normal mb-0`}>Let's work together!</p>
                            </div>


                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-8 col-xl-6">
                                    <form onSubmit={formik.handleSubmit}>

                                        {/* <!-- Name input--> */}

                                        <div className={`form-floating mb-3 ${formik.touched.name && formik.errors.name ? 'has-invalid' : 'has-valid'}`}>
                                            <input
                                                className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''} ${formik.touched.name && !formik.errors.name ? 'is-valid' : ''}`}
                                                id="name"
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name..."
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.name && formik.errors.name && (
                                                <div className="invalid-feedback">{formik.errors.name}</div>
                                            )}
                                            {formik.touched.name && !formik.errors.name && (
                                                <div className="valid-feedback">Valid</div>
                                            )}

                                            <label htmlFor="name">Full name</label>
                                        </div>


                                        {/* Email input */}

                                        <div className={`form-floating mb-3 ${formik.touched.email && formik.errors.email ? 'has-invalid' : 'has-valid'}`}>
                                            <input
                                                className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''} ${formik.touched.email && !formik.errors.email ? 'is-valid' : ''}`}
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="name@example.com"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.email && formik.errors.email && (
                                                <div className="invalid-feedback">{formik.errors.email}</div>
                                            )}
                                            {formik.touched.email && !formik.errors.email && (
                                                <div className="valid-feedback">Valid</div>
                                            )}
                                            <label htmlFor="email">Email address</label>
                                        </div>



                                        {/* Phone input */}

                                        <div className={`form-floating mb-3 ${formik.touched.phone && formik.errors.phone ? 'has-invalid' : 'has-valid'}`}>
                                            <input
                                                className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''} ${formik.touched.phone && !formik.errors.phone ? 'is-valid' : ''}`}
                                                id="phone"
                                                type="tel"
                                                name="phone"
                                                placeholder="(123) 456-7890"
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.phone && formik.errors.phone && (
                                                <div className="invalid-feedback">{formik.errors.phone}</div>
                                            )}
                                            {formik.touched.phone && !formik.errors.phone && (
                                                <div className="valid-feedback">Valid</div>
                                            )}
                                            <label htmlFor="phone">Phone number</label>
                                        </div>


                                        {/* Message input */}

                                        <div className={`form-floating mb-3 ${formik.touched.message && formik.errors.message ? 'has-invalid' : 'has-valid'}`}>
                                            <textarea
                                                className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''} ${formik.touched.message && !formik.errors.message ? 'is-valid' : ''}`}
                                                id="message"
                                                type="text"
                                                name="message"
                                                placeholder="Enter your message here..."
                                                value={formik.values.message}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            ></textarea>
                                            {formik.touched.message && formik.errors.message && (
                                                <div className="invalid-feedback">{formik.errors.message}</div>
                                            )}
                                            {formik.touched.message && !formik.errors.message && (
                                                <div className="valid-feedback">Valid</div>
                                            )}
                                            <label htmlFor="message">Message</label>
                                        </div>




                                        {/* Submit button */}
                                        <div className="d-grid"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
