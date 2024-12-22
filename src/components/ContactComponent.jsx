import React from 'react';
import '../App.css';
import rightImage from '../assets/images/banner-right-image.jpeg';

function ContactComponent() {
    return (
        <>
            <div id="contact" className="contact-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
                            <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="section-heading">
                                            <h6>For Support</h6>
                                            <h2>
                                                National Level World <em><span>Record Program</span></em> 2025
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Contact Details Section */}
                                    <div className="col-lg-8">
                                        <section className="pricing py-5">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12 text-center">
                                                        <div className="card mb-2 mb-lg-0">
                                                            <div className="card-body">
                                                                <h5 className="card-title text-muted text-uppercase text-center">
                                                                    For Support
                                                                </h5>
                                                                <h6 className="card-price text-center">
                                                                    Contact Us <span className="period">Through</span>
                                                                </h6>
                                                                <hr />
                                                                <ul className="fa-ul">
                                                                    <li>
                                                                        <span className="fa-li">
                                                                            <i className="fas fa-phone">&nbsp;Call:</i>
                                                                        </span>
                                                                        <strong>
                                                                            <a href="tel:6389038785">63890 38785</a>
                                                                            <br />
                                                                            <a href="tel:8438757335">84387 57335</a>
                                                                        </strong>
                                                                    </li>
                                                                    <li>
                                                                        <span className="fa-li">
                                                                            <i className="fas fa-envelope">&nbsp;Email: </i>
                                                                        </span>
                                                                        example@gmail.com
                                                                    </li>
                                                                    <li>
                                                                        <span className="fa-li">
                                                                            <i className="fas fa-home">&nbsp;Address:</i>
                                                                        </span>
                                                                        <strong>Social and Musical Chamber Trust</strong>
                                                                        <p>
                                                                            No. 67/82, 1st Floor, D. J. Towers,
                                                                            <br />
                                                                            Nellikuppam Main Road, Near Krishna Scans
                                                                            <br />
                                                                            Cuddalore, Tamil Nadu
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    {/* Right Side Image Section */}
                                    <div className="col-lg-4 d-flex align-items-center">
                                        <img
                                            src={rightImage}
                                            alt="Right Banner"
                                            className="img-fluid rounded shadow"
                                            style={{ maxHeight: '800px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactComponent;
