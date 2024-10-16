import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactUs.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const [submitSuccess, setSubmitSuccess] = useState('');

  // Form validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobileNumber: Yup.string().matches(/^\d{10}$/, 'Must be a valid 10-digit phone number').required('Mobile number is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const formData = {
      full_name: values.fullName,
      email_address: values.email,
      mobile_number: values.mobileNumber,
      your_subject: values.subject,
      your_message: values.message,
    };

    // Simulate a form submission
    console.log(formData);
    

    resetForm();
    setSubmitSuccess('Form submitted successfully!');

    setTimeout(() => {
      setSubmitSuccess('');
    }, 3000);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="welcome-section text-center mb-4" style={{ background: "linear-gradient(to right, #105183, #252472)" }}>
          <h2 className="welcome-title text-white font-semibold">Welcome to Our Contact Us</h2>
          <p className="welcome-message text-black font-semibold">
            We’re here to help! Please fill out the form below, and we’ll get back to you as soon as possible.
          </p>{submitSuccess && (
                      <div className="col-12 mt-3">
                        <div className="alert alert-success">
                          {submitSuccess}
                        </div>
                      </div>
                    )}
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 border-0 rounded-lg p-6 bg-white relative sm:-top-20">
            <h2 className="text-center text-gray text-20px font-semibold mb-4"> Contact Us</h2>
            <Formik
              initialValues={{ fullName: '', email: '', mobileNumber: '', subject: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                      <Field
                        type="text"
                        name="fullName"
                        placeholder="Full name "
                        className="form-control text-gray font-montserrat"
                      />
                      <ErrorMessage name="fullName" component="div" className="text-danger font-semibold" />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <Field
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        className="form-control text-gray font-montserrat"
                      />
                      <ErrorMessage name="email" component="div" className="text-danger font-semibold" />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <Field
                        type="text"
                        name="mobileNumber"
                        placeholder="Mobile number "
                        className="form-control text-gray font-montserrat"
                      />
                      <ErrorMessage name="mobileNumber" component="div" className="text-danger font-semibold" />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <Field
                        type="text"
                        name="subject"
                        placeholder="Subject "
                        className="form-control text-gray font-montserrat"
                      />
                      <ErrorMessage name="subject" component="div" className="text-danger font-semibold" />
                    </div>

                    <div className="col-12 mb-3">
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Your message here"
                        className="form-control text-gray font-montserrat"
                        rows="5"
                      />
                      <ErrorMessage name="message" component="div" className="text-danger font-semibold " />
                    </div>

                    <div className="col-12 text-center mt-3 ">
                      <button type="submit" disabled={isSubmitting} className="text-black no-underline border-2 border-[#0871b3] px-6 py-2 rounded-lg font-semibold transition-colors hover:bg-[#0871b3]">
                        Submit
                      </button>
                    </div>

                    
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* New div for address and Google Map */}
          <div className="col-md-10 m-5">
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <h4 className="mb-3 mt-6 font-bold font-montserrat text-gray">Contact Information</h4>
                <p className='font-montserrat text-gray'>
                  <strong>Address:</strong> 123 Main St, City, State, ZIP Code<br />
                  <strong>Email:</strong> contact@example.com<br />
                  <strong>Phone:</strong> (123) 456-7890
                </p>
                <section className="font-montserrat text-gray mb-12">
        <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray   p-2 rounded-full transition-colors hover:border-black  hover:text-black"
          >
            <FaFacebookF className="text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray   p-2 rounded-full transition-colors hover:border-black  hover:text-black"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray   p-2 rounded-full transition-colors hover:border-black  hover:text-black"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray   p-2 rounded-full transition-colors hover:border-black  hover:text-black"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </section>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <h4 className='font-bold font-montserrat text-gray'>Our Location</h4>
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093883!2d144.9537363153169!3d-37.8162791797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4d3ef67%3A0x5045675218ce6e0!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1631284644999!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
