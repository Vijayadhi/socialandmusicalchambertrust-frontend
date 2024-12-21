import React, { useState } from "react";
import axios from "axios";

function GuruRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "vignesh",
    mobile_number: "6380661435",
    email: "vignesh@gmail.com",
    profile: "https://fontawesome.com/",
    password: "Admin12.@",
    confirm_password: "Admin12.@",
    name_of_institute: "sdlhf",
    address_of_institute: "al;f",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Mobile number validation (10 digits only)
    if (!/^\d{10}$/.test(formData.mobile_number)) {
      newErrors.mobile_number = "Enter a valid 10-digit mobile number";
    }

    // Email validation
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Profile URL validation
    // if (!/^https?:\/\/.+\.+\=(jpg|jpeg|png|gif|webp|sharing)$/.test(formData.profile)) {
    //   newErrors.profile = "Enter a valid image URL (jpg, png, gif, webp)";
    // }

    // Password validation (8+ characters, at least one uppercase, one lowercase, one number)
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(formData.password)) {
      newErrors.password = "Password must be 8+ characters with a mix of uppercase, lowercase, and numbers";
    }

    // Confirm password validation
    if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
    }

    // Name of institute validation
    if (!formData.name_of_institute.trim()) {
      newErrors.name_of_institute = "Institute name is required";
    }

    // Address of institute validation
    if (!formData.address_of_institute.trim()) {
      newErrors.address_of_institute = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const fetchCSRFToken = async () => {
    const API_URL = import.meta.env.VITE_BACKEND_API; // Ensure correct backend URL

    try {
      const response = await axios.get(`${API_URL}/api/csrf-token/`);
      return response.data.csrfToken;
    } catch (error) {
      console.error("Error fetching CSRF token", error);
      return null;
    }
  };

  function getCSRFToken() {
    fetchCSRFToken()
    let cookieValue = null;
    const name = 'csrftoken';
    console.log(document.cookie);

    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data before submission
    if (validate()) {
      const API_URL = import.meta.env.VITE_BACKEND_API; // Backend API URL
      const csrftoken = getCSRFToken();  // Get the CSRF token from cookies

      // if (!csrftoken) {
      //   console.error("CSRF token is missing.");
      //   alert("CSRF token is missing. Please refresh the page.");
      //   return;
      // }

      const headers = {
        "Content-Type": "application/json",  // Set the content type to JSON
        "X-CSRFToken": csrftoken,  // Attach CSRF token to the request header
      };

      const body = JSON.stringify(formData);  // Convert form data to JSON

      // Send the POST request with CSRF token and credentials
      axios
        .post(`${API_URL}/api/guru/register`, body, { headers, withCredentials: true })
        .then((response) => {
          console.log("Form submitted successfully:", response.data);
          alert("Form submitted successfully!");
          // Optionally, you can clear the form after submission
          // formData.clear()  // Uncomment if formData has a clear method
        })
        .catch((error) => {
          console.error("Error:", error.response ? error.response.data : error.message);
          alert("Error submitting form. Please try again.");
        });

      console.log("Form data submitted:", formData);  // Log the form data (for debugging purposes)
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <form id="contact" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h2>Guru Registration</h2>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-6">
              <fieldset>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <span className="text-danger">{errors.name}</span>}
              </fieldset>
            </div>
            <div className="col-lg-6">
              <fieldset>
                <input
                  type="text"
                  name="mobile_number"
                  id="mobile_number"
                  placeholder="Contact Number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  required
                />
                {errors.mobile_number && <span className="text-danger">{errors.mobile_number}</span>}
              </fieldset>
            </div>
            <div className="col-lg-6">
              <fieldset>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="text-danger">{errors.email}</span>}
              </fieldset>
            </div>
            <div className="col-lg-6">
              <fieldset>
                <input
                  type="url"
                  name="profile"
                  id="profile"
                  placeholder="Profile Photo URL"
                  value={formData.profile}
                  onChange={handleChange}
                  required
                />
                {errors.profile && <span className="text-danger">{errors.profile}</span>}
              </fieldset>
            </div>
            <div className="col-lg-6">
              <fieldset>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <span className="text-danger">{errors.password}</span>}
              </fieldset>
            </div>
            <div className="col-lg-6">
              <fieldset>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  required
                />
                {errors.confirm_password && <span className="text-danger">{errors.confirm_password}</span>}
              </fieldset>
            </div>
            <div className="col-lg-6">
              <fieldset>
                <input
                  type="text"
                  name="name_of_institute"
                  id="name_of_institute"
                  placeholder="Name of Institute"
                  value={formData.name_of_institute}
                  onChange={handleChange}
                  required
                />
                {errors.name_of_institute && <span className="text-danger">{errors.name_of_institute}</span>}
              </fieldset>
            </div>
            <div className="col-lg-6">
              <fieldset>
                <textarea
                  name="address_of_institute"
                  id="address_of_institute"
                  placeholder="Address of Institute"
                  value={formData.address_of_institute}
                  onChange={handleChange}
                  required
                />
                {errors.address_of_institute && <span className="text-danger">{errors.address_of_institute}</span>}
              </fieldset>
            </div>
            <div className="col-lg-6">
              <button type="reset" className="btn btn-danger" style={{ background: "red" }}>
                Reset
              </button>
            </div>
            <div className="col-lg-6">
              <button type="submit" className="main-button">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default GuruRegistrationForm;
