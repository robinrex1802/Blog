import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './css/contact.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function Contact() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setInput({ ...input, [name]: files[0] });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSumbit = () => {
    if (input.phone.length !== 10) {
      Swal.fire(
        'Invalid Phone Number!',
        'Phone number must be exactly 10 digits.',
        'error'
      );
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to send this yes?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, send it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('email', input.email);
        formData.append('phone', input.phone);
        formData.append('message', input.message);

        axios.post(`api/contact/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(res => {
            console.log("res", res);
            Swal.fire(
              'Sent!',
              'Your message has been sent.',
              'success'
            );
          })
          .catch(error => {
            console.error("There was an error sending the message!", error);
            Swal.fire(
              'Error!',
              'There was an error sending the message.',
              'error'
            );
          });
      }
    });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.body.style.backgroundColor = '#d3d3d3'; // Set background color to light grey
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info py-2">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <span className="navbar-brand fw-bold fs-4">Blog</span>
            <i className="fas fa-external-link-alt ms-2" />
          </div>
          <div className="d-flex align-items-center ms-auto">
            <Link to="/" className="me-5 zoom-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-house-fill" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
              </svg>
            </Link>
            <Link to="/About" className="me-5 zoom-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" viewBox="0 0 16 16">
                <path d="M6.5 2v1h3V2h-3z" />
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-4.5 8c0-2 4-2 4-2s4 0 4 2v1h-8v-1z" />
              </svg>
            </Link>
            <Link to="/blog" className="me-5 zoom-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="black">
                <path d="M4 3h16v3H4V3zm0 5h16v3H4V8zm0 5h16v8l-8-4-8 4v-8z" />
              </svg>
            </Link>
            

          
          </div>
        </div>
      </nav>

      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" data-aos="fade-right">
        <div className="row w-100">
          <div className="col-12">
            <div className="position-relative bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926")' }}>
              <div className="overlay" />
              <div className="position-relative p-4 p-md-5 d-md-flex justify-content-between">
                <div className="col-md-6">
                  <h1 className="display-4 font-weight-bold mb-4 text-white">Contact Us</h1>
                  <p className="mb-4 text-white">A typical blog combines text, digital images, and links to other blogs, web pages, and other media related to its topic.</p>
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-phone-alt fa-2x mr-3 text-white" />
                      <div>
                        <p className="font-weight-bold mb-0 text-white">Phone</p>
                        <p className="mb-0 text-white">+91 9360342639 Always Forever</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3 text-white text-white">
                      <i className="fas fa-map-marker-alt fa-2x mr-3" />
                      <div>
                        <p className="font-weight-bold mb-0">Address</p>
                        <p className="mb-0">Dubai kuruku santhu,Dubai manin Road,Dubai</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-white">
                      <i className="fas fa-envelope fa-2x mr-3" />
                      <div>
                        <p className="font-weight-bold mb-0">Email</p>
                        <p className="mb-0">rex@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 bg-white text-dark p-4 p-md-5 rounded-lg shadow-lg mt-4 mt-md-0">
                  <h2 className="h4 font-weight-bold mb-4">Send Message</h2>
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" id="name" name="name" onChange={handleInput} placeholder="Full Name" />
                    </div>
                    <br />
                    <div className="form-group">
                      <input type="email" className="form-control" id="email" name="email" onChange={handleInput} placeholder="Email" />
                    </div>
                    <br />
                    <div className="form-group">
                      <input type="number" className="form-control" id="phone" name="phone" onChange={handleInput} placeholder="Phone" />
                    </div>
                    <br />
                    <div className="form-group">
                      <textarea className="form-control" id="message" rows={4} name="message" onChange={handleInput} placeholder="Type your message..." />
                    </div>
                    <br />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handleSumbit}
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-arrow-right-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
                    </svg>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5">
        {/* Grid Section */}
        <div className="row g-4" data-aos="fade-right">
          <div className="col-12 col-md-6">
            <div className="bg-white text-dark p-4 rounded shadow-sm">
              <h2 className="fs-4 fw-bold mb-2">What is blog?</h2>
              <p>
                A blog is an online platform where individuals or organizations share articles, opinions, updates, or tutorials on various topics. It can be personal, professional, or niche-focused.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6" data-aos="fade-left">
            <div className="bg-white text-dark p-4 rounded shadow-sm">
              <h2 className="fs-4 fw-bold mb-2">Advantages of Blogging</h2>
              <p>
                A blog allows you to share your expertise, experiences, and opinions with a global audience. It provides a platform to educate and inspire others..Regular blogging enhances writing ability and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Gradient Section */}
        <div className="text-white text-center py-5" data-aos="fade-right" style={{ background: 'linear-gradient(to bottom, #0a0a23, #00bfa5)' }}>
          <h2 className="fs-4 fw-bold text-white">Let's talk!</h2>
          <p className="mt-2">Reach out with questions or comments. We are here to help!</p>
          <button className="mt-3 btn btn-warning">
            <Link to="/contact" className="text-dark text-decoration-none">
              Contact us
            </Link>
          </button>
        </div>

        {/* Footer Section */}
        <footer className="bg-dark text-white py-5" data-aos="fade-left">
          <div className="container">
            <div className="row g-4">
              <div className="col">
                <h3 className="fw-bold">TECH FIX</h3>
                <a href="#" className="text-success text-decoration-none">
                  Blog
                </a>
                <div className="d-flex gap-3 mt-3">
                  <a href="#">
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-xing text-white"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube text-white"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 border-top border-secondary pt-3 text-center">
              <p>© Blogs 2025</p>
              <div className="d-flex justify-content-center gap-3 mt-2">
                <a href="#" className="text-white text-decoration-none">
                  Terms of use
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Privacy notice
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Cookie statement
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Contact;