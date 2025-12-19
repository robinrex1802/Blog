import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./css/style.css";
import "./css/styles.css";
import { Link } from 'react-router-dom';

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <style>
                {`
                    body {
                        background-color: lightgrey;
                    }
                `}
            </style>
           <nav className="navbar navbar-expand-lg navbar-light bg-info py-2">
  <div className="container-fluid">
    <div className="d-flex align-items-center">
      <span className="navbar-brand fw-bold fs-4">Blog</span>
      <i className="fas fa-external-link-alt ms-2" />
    </div>
    <div className="d-flex align-items-center ms-auto">
  <Link to="/" className="me-5 zoom-icon">  {/* Add zoom-icon class */}
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-house-fill" viewBox="0 0 16 16">
      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
    </svg>
  </Link> 
  <Link to="/About" className="me-5 zoom-icon"> {/* Add zoom-icon class */}
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" viewBox="0 0 16 16">
      <path d="M6.5 2v1h3V2h-3z"/>
      <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-4.5 8c0-2 4-2 4-2s4 0 4 2v1h-8v-1z"/>
    </svg>
  </Link>
  <Link to="/blog" className="me-5 zoom-icon"> {/* Add zoom-icon class */}
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="black">
      <path d="M4 3h16v3H4V3zm0 5h16v3H4V8zm0 5h16v8l-8-4-8 4v-8z"/>
    </svg>
  </Link>
  <Link to="/contact" className="me-5 zoom-icon"> {/* Add zoom-icon class */}
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3.654 1.328a1 1 0 0 1 1.168-.217c.366.183.86.524 1.352 1.016.492.492.833.986 1.016 1.352a1 1 0 0 1-.217 1.168l-.549.549c-.277.277-.291.678-.07.97a11.165 11.165 0 0 0 2.507 2.507c.292.221.693.207.97-.07l.549-.549a1 1 0 0 1 1.168-.217c.366.183.86.524 1.352 1.016.492.492.833.986 1.016 1.352a1 1 0 0 1-.217 1.168l-.272.272c-.813.813-1.92 1.39-3.107 1.147-1.262-.254-2.993-1.19-4.945-3.142-1.953-1.953-2.888-3.683-3.142-4.945-.243-1.187.334-2.294 1.147-3.107l.272-.272z"
      />
    </svg>
  </Link>
  
  
     
    </div>
  </div>
</nav>
            <div>
                {/* Navbar Section Starts Here */}
                <section className="navbar">
                    <div className="container">
                        <div className="logo">
                            <a href="#" title="Logo">
                                <img src={require("./images/blog.jpeg")} alt="Blog Logo" className="img-responsive" />
                            </a>
                        </div>
                       
                    </div>
                </section>
                {/* Navbar Section Ends Here */}
                {/* About Section Starts Here */}
                <div className="heading" data-aos="fade-up">
                    <h1>About As</h1>
                    <p>
                        Identify your specific audience  like
                    </p>
                </div>
                <div className="container">
                    <section className="about">
                        <div className="about-imgage" data-aos="fade-left">
                            <img src={require("./images/newone.webp")} alt="About" />
                        </div>
                        <div className="about-container">
                            <h2 data-aos="fade-right">Warm embrace in a cup</h2>
                            <p data-aos="fade-right">
                                A blog, short for weblog, is a frequently updated web page used for
                                personal commentary or business content.
                                Blogs are often interactive and include sections at the bottom of individual blog posts
                                where readers can leave comments.
                                A typical blog combines text, digital images,
                                and links to other blogs, web pages, and other media related to its topic.
                            </p>
                            <a href className="read-more" data-aos="fade-up">Read More</a>
                        </div>
                    </section>
                </div>
                <br></br>
                <br></br>  

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
            A blog allows you to share your expertise, experiences, and opinions with a global audience.
            It provides a platform to educate and inspire others..Regular blogging enhances writing ability and creativity.
            
            </p>
          </div>
        </div>
      </div>
                    
               
                     {/* Gradient Section */}
                <div className="text-white text-center py-5" style={{ background: "linear-gradient(to bottom, #0a0a23, #00bfa5)" }}data-aos="fade-right">
                       <h2 className="fs-4 fw-bold text-white">Let's talk!</h2> {/* Change text color to white */}
                       <p className="mt-2">Reach out with questions or comments. We are here to help!</p>
                       <button className="mt-3 btn btn-warning">
                         <Link to="/contact" className="text-dark text-decoration-none">Contact us</Link>
                       </button>
                     </div>
                          {/* Footer Section */}
                          <footer className="bg-dark text-white py-5" data-aos="fade-left">
                            <div className="container">
                              <div className="row g-4">
                                <div className="col">
                                  <h3 className="fw-bold">TECH FIX</h3>
                                  <a href="#" className="text-success text-decoration-none">Blog</a>
                                  <div className="d-flex gap-3 mt-3">
                                    <a href="#"><i className="fab fa-facebook-f text-white"></i></a>
                                    <a href="#"><i className="fab fa-xing text-white"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in text-white"></i></a>
                                    <a href="#"><i className="fab fa-instagram text-white"></i></a>
                                    <a href="#"><i className="fab fa-youtube text-white"></i></a>
                                  </div>
                                </div>
                              </div>
                    
                              <div className="mt-4 border-top border-secondary pt-3 text-center">
                                <p>© Blogs 2025</p>
                                <div className="d-flex justify-content-center gap-3 mt-2">
                                  <a href="#" className="text-white text-decoration-none">Terms of use</a>
                                  <a href="#" className="text-white text-decoration-none">Privacy notice</a>
                                  <a href="#" className="text-white text-decoration-none">Cookie statement</a>
                                </div>
                              </div>
                            </div>
                          </footer>
                        </div>
                    
                    
                   </div>

        </>
    )
}

export default About