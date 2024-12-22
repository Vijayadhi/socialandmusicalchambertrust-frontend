import React from 'react'
import HeaderComponent from './HeaderComponent'

function RegistrationComponent() {
  return (
    <>
      <HeaderComponent />
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                      <div className="section-heading">
                        <h2>Student Registration</h2>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row">
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="mobile_number" id="mobile_number" placeholder="Contact Number" autocomplete="on" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="date" name="dob" id="dob" placeholder="Date Of Birth" autocomplete="on" />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="password" name="password" id="password" placeholder="Password" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="father_name" id="father_name" placeholder="Father Name" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="mother_name" id="Mother_name" placeholder="Mother Name" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="guru_name" id="guru_name" placeholder="Guru Name" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="guru_reg_num" id="guru_reg_num" placeholder="Guru Registraion Number" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="name_of_institue" id="name_of_institue" placeholder="Name of Institute" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="guru_mobile_number" id="guru_mobile_number" placeholder="Guru Mobile Number" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <textarea type="text" name="address_of_institute" id="address_of_institute" placeholder="Address of Institute" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="payment_ref_number" id="payment_ref_number" placeholder="Payment Reference Number" required />
                          </fieldset>
                          <fieldset>
                            <input type="text" name="payment_proof_url" id="payment_proof_url" placeholder="Payment Proof Url" required />
                          </fieldset>
                        </div>

                        <div className="col-lg-6">
                          <fieldset>
                            <button type="reset" id="form-submit" className="btn btn-danger" style={{background: "red"}}>Reset</button>

                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <button type="submit" id="form-submit" className="main-button ">Register</button>

                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="contact-info">
                        <ul>
                          <li>
                            <div className="icon">
                              <img src="assets/images/contact-icon-01.png" alt="email icon" />
                            </div>
                            <a href="#">info@company.com</a>
                          </li>
                          <li>
                            <div className="icon">
                              <img src="assets/images/contact-icon-02.png" alt="phone" />
                            </div>
                            <a href="#">+001-002-0034</a>
                          </li>
                          <li>
                            <div className="icon">
                              <img src="assets/images/contact-icon-03.png" alt="location" />
                            </div>
                            <a href="#">26th Street, Digital Villa</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegistrationComponent

