import React, { useEffect, useState } from 'react'; import CountUp from 'react-countup';
import leftImage1 from "../assets/images/caro-1.jpeg";
import leftImage2 from "../assets/images/caro-2.jpeg"; // Example additional images

function About() {
    const [startCounting, setStartCounting] = useState(false);

    useEffect(() => {
        // Trigger the animation when the component is mounted
        setStartCounting(true);
    }, []);
    return (
        <>
            <div id="about" className="about-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={leftImage1} className="d-block w-100" alt="Image 1" height="650" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={leftImage2} className="d-block w-100" alt="Image 2" height="650" />
                                    </div>
                                    {/* Add more images here as needed */}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                            <div className="section-heading">
                                <h6>About Us</h6>
                                <h2>உலக    <em>சாதனை</em> பரதத்தில் பாரதியும் <span>பாரதமும்</span></h2>
                            </div>
                            <div className="row">
                                {/* <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>
                                            {startCounting && <CountUp end={750} duration={10} suffix="+" />}
                                        </h4>
                                        <h6>Students Registered</h6>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>
                                            {startCounting && <CountUp end={340} duration={10} suffix="+" />}
                                        </h4>
                                        <h6>Gurus Registered</h6>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>
                                            {startCounting && <CountUp end={128} duration={10} suffix="+" />}
                                        </h4>
                                        <h6>awards</h6>
                                    </div>
                                </div> */}
                            </div>
                            <p>Organized by the Social and Musical Chambers Trust, Cuddalore, in collaboration with the Lions Club of Cosmopolitan and International Lions Club Members, this event aims to raise awareness about the Swachh Bharat Mission and promote a plastic-free, clean environment.

                                Featuring world-record songs inspired by the timeless lyrics of Mahakavi Bharathiyar, brought to life by talented musicians and our dedicated team, this event promises to be an inspiring experience.

                                We warmly welcome your presence and support to make this initiative a grand success!

                                For Enquiries: Contact our Organizing Team.</p>
                            <div className="main-green-button"><a href="#registerhere">Register Now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
