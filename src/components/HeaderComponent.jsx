import React from 'react'
import logo from "../assets/images/logo-icon.png";

function HeaderComponent() {
    const navigate_url = `${import.meta.env.VITE_BACKEND_API}`

    return (
        <>
            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="index.html" className="logo">
                                    <h4>World Record Programme<img src={logo} alt="" /><span style={{fontSize:15+'px'}}>Puducherry-2025</span></h4>
                                    <p></p>
                                </a>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                    <li className="scroll-to-section"><a href="#registerhere">Register</a></li>
                                    <li className="scroll-to-section"><a href="#about">About</a></li>
                                    {/* <li className="scroll-to-section"><a href="#services">Services</a></li> */}
                                    {/* <li className="scroll-to-section"><a href="#portfolio">Portfolio</a></li> */}
                                    <li className="scroll-to-section"><a href="#contact">Contact Us</a></li>
                                    <li className="scroll-to-section"><div className="main-blue-button"><a href={navigate_url} target='_blank'>Admin Login</a></div></li>
                                </ul>
                                <a className='menu-trigger' >
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}
        </>
    )
}

export default HeaderComponent