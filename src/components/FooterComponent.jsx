import React from 'react'

function FooterComponent() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>
                                Copyright © {new Date().getFullYear()}  All Rights Reserved.

                            <br />Brought to Live By <a rel="nofollow" href="https://portfolio-vigneshwaran.netlify.app" title="Vigneshwaran" target='_blank'>Vigneshwaran</a></p>
                    </div>
                </div>
            </div>
        </footer >
        </>
    )
}

export default FooterComponent