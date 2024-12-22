import React, { useState, useEffect } from 'react';
import HeaderComponent from './HeaderComponent';
import rightImage from "../assets/images/banner-right-image.jpeg";
import "../assets/css/countdown.css"
import FooterComponent from './FooterComponent';
import About from './About';
import videoSource from "../assets/videos/intro.mp4"; // Example video file
import ContactComponent from './ContactComponent';
import imageLeftRegister from "../assets/images/image-left-register.jpeg";
import { useNavigate } from 'react-router-dom';

function HomePageCompoment() {
    const navigate_url = `${import.meta.env.VITE_BACKEND_API}`
    const guruRegistrationUrl = `${import.meta.env.VITE_BACKEND_REGISTRATION_URL}/backend/registerGuru`
    const StudentRegistrationUrl = `${import.meta.env.VITE_BACKEND_REGISTRATION_URL}/backend/registerGuru`

    const navigate = useNavigate();

    // Handle student registration redirection
    const handleStudentRegistration = () => {
        navigate('/studentRegistration');
    }

    const handleGuruRegistration = () => {
        navigate('/guruRegistration');
    }

    return (
        <>
            <HeaderComponent />
            {/* Home Page */}
            <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">

                                        <div className="row">
                                            <section className="countdown">
                                                <div className="timer">
                                                    <h3>உலக சாதனை <br />பரதத்தில் பாரதியும் பாரதமும்</h3>
                                                    <div className="counter">
                                                        <div className="counter__box black-white">
                                                            <p className="counter__time" id="days"></p>
                                                            <p className="counter__duration">days</p>
                                                        </div>
                                                        <div className="counter__box sky-blue">
                                                            <p className="counter__time" id="hours"></p>
                                                            <p className="counter__duration">hours</p>
                                                        </div>
                                                        <p className="dots">:</p>
                                                        <div className="counter__box sky-blue">
                                                            <p className="counter__time" id="minutes"></p>
                                                            <p className="counter__duration">minutes</p>
                                                        </div>
                                                        <p className="dots">:</p>
                                                        <div className="counter__box sky-blue">
                                                            <p className="counter__time" id="seconds"></p>
                                                            <p className="counter__duration">seconds</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </section>
                                            <div className="col-lg-12">
                                                <h2>World Record Programme Puducherry - 2025</h2>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="main-green-button scroll-to-section">
                                                    <a href="#registerhere">Get Registered Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                        {/* Video or Image Carousel */}
                                        <video
                                            width="100%" // Adjust width as needed
                                            autoPlay // This will make the video play automatically on load
                                            // muted // Optional: If you want the video to be muted on load, add muted
                                            loop // Optional: If you want the video to loop, you can add this
                                            controls
                                            style={{ borderRadius: '25px' }}
                                        >
                                            <source src={videoSource} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Home Page */}

            {/* Features */}
            <div id="registerhere" className="features section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="features-content">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src={imageLeftRegister} alt="Registration" />
                                    </div>
                                    <div className="col-lg-3">
                                        <a href={guruRegistrationUrl} target='_blank'>
                                            <div
                                                className="features-item second-feature wow fadeInUp"
                                                data-wow-duration="1s"
                                                data-wow-delay="0.2s"
                                            >
                                                <div className="second-number number">
                                                    <h6>01</h6>
                                                </div>
                                                <div className="icon"></div>
                                                <h4>Guru Registration</h4>
                                                <div className="line-dec"></div>
                                                <p>
                                                    Join our world record program as a Guru and make yourself as aspiring teacher.
                                                    Register now to become a part of an inspiring community dedicated to growth and excellence make.
                                                </p>
                                            </div>

                                        </a>
                                    </div>
                                    <div className="col-lg-3">
                                        <a href={StudentRegistrationUrl} target='_blank'>

                                            <div
                                                className="features-item first-feature wow fadeInUp"
                                                data-wow-duration="1s"
                                                data-wow-delay="0.4s"
                                            >
                                                <div className="third-number number">
                                                    <h6>02</h6>
                                                </div>
                                                <div className="icon"></div>
                                                <h4>Student Registration</h4>
                                                <div className="line-dec"></div>
                                                <p>
                                                    Join us in this prestigious world record event, celebrating the timeless verses of
                                                    Mahakavi Bharathiyar through music and unity. Be a part of history and make your contribution count.
                                                </p>
                                            </div>

                                        </a>
                                    </div>
                                    <div className="col-lg-3">
                                        <a href={navigate_url} target="_blank">
                                            <div
                                                className="features-item second-feature last-features-item wow fadeInUp"
                                                data-wow-duration="1s"
                                                data-wow-delay="0.6s"
                                            >
                                                <div className="fourth-number number">
                                                    <h6>03</h6>
                                                </div>
                                                <div className="icon"></div>
                                                <h4>Common Login</h4>
                                                <div className="line-dec"></div>
                                                <p>
                                                    Access your personalized dashboard to participate, contribute, and stay updated
                                                    on our world record event. Together, let’s make history with Mahakavi Bharathiyar's timeless verses.
                                                </p>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Features End */}

            <About />
            <ContactComponent />
        </>
    );
}

export default HomePageCompoment;
