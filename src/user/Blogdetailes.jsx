import React, {useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Blogdetailes() {

const [input, setInput] = useState({
      name: '',
      email: '',
      phone: '',   
      message: ''
    });

const [error, setError] = useState('');

    const handleInput = (e) => {
      const { name, value, files } = e.target;
      if (name === 'image') {
        setInput({ ...input, [name]: files[0] });
      } else {
        setInput({ ...input, [name]: value });
      }
    } 

    const handleSumbit = () => {
      if (input.phone.length !== 10) {
        setError('Phone number must be exactly 10 digits.');
        return;
      }
      setError('');
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to send this feedback?",
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
  
          axios.post(`api/comment/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then(res => {
              console.log("res", res);
              Swal.fire(
                'send!',
                'Your comment has been sended.',
                'success'
              )
            })
            .catch(error => {
              console.error("There was an error sending the comment!", error);
              Swal.fire(
                'Error!',
                'There was an error sending the comment.',
                'error'
              )
            });
        }
      })
    }


    const[data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
      axios.get("api/blog/")
        .then(response => {
          setData(response.data)
        })
        .catch((error) => {
          console.error("There was an error fetching the comments!", error);
        })
    }, [])

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
    document.body.style.backgroundColor = "#d3d3d3"; // Set background color to light grey
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
       <div className="rex">
  <section className="navbar">
    <div className="container">
      <div className="logo">
        <a href="#" title="Logo">
          <img src={require("./images/blog.jpeg")} alt="Logo" className="img-responsive" />
        </a>
      </div>
    
    </div>
  </section>
</div>
<div id="layout-wrapper">
  {/* ============================================================== */}
  <div className="main-content">
    <div className="page-content">
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between" data-aos="fade-up">
              <h4 className="mb-sm-0 font-size-18">Blog Details</h4>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="pt-3">
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div>
                        <div className="text-center">
                          <div className="mb-4" data-aos="fade-up">
                            <a href="" className="badge bg-light font-size-12">
                              <i className="bx bx-purchase-tag-alt align-middle text-muted me-1" /> Project
                            </a>
                          </div>
                          { 
                            data.map((item) => {
                              return (
                                <>
                                  <h4 data-aos="fade-up">{item.title}</h4>
                                  <p className="text-muted mb-4" data-aos="fade-up">
                                    <i className="mdi mdi-calendar me-1" /> {item.date}
                                  </p>
                                  <hr />
                                  <div className="text-center">
                                    <div className="row">
                                      <div className="col-sm-4" data-aos="fade-right">
                                        <div>
                                          <p className="text-muted mb-2">Categories</p>
                                          <h5 className="font-size-15">{item.category}</h5>
                                        </div>
                                      </div>
                                      <div className="col-sm-4" data-aos="fade-up">
                                        <div className="mt-4 mt-sm-0">
                                          <p className="text-muted mb-2">Date</p>
                                          <h5 className="font-size-15">{item.date}</h5>
                                        </div>
                                      </div>
                                      <div className="col-sm-4" data-aos="fade-left">
                                        <div className="mt-4 mt-sm-0">
                                          <p className="text-muted mb-2">Post by</p>
                                          <h5 className="font-size-15">{item.author}</h5>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr />
                                  <div className="my-5" data-aos="fade-up">
                                    <img src={item.image} alt className="img-thumbnail mx-auto d-block" />
                                  </div>
                                  <hr />
                                  <div className="mt-4">
                                    <div className="text-muted font-size-14">
                                      <p data-aos="fade-right">{item.description}</p>
                                      <p data-aos="fade-up">{item.description}</p>
                                      <blockquote className="p-4 border-light border rounded mb-4" data-aos="fade-up">
                                        <div className="d-flex">
                                          <div className="me-3">
                                            <i className="bx bxs-quote-alt-left text-dark font-size-24" />
                                          </div>
                                          <div>
                                            <p className="mb-0">{item.quates}</p>
                                          </div>
                                        </div>
                                      </blockquote>
                                    </div>
                                  </div>
                                </>
                              );
                            })
                          }
                        </div>
                        <hr />
                        <div className="mt-4" data-aos="fade-up">
                          <h5 className="font-size-16 mb-3">Comments</h5>
                          <form>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label htmlFor="commentname-input" className="form-label">Name</label>
                                  <input type="text" className="form-control" id="name" onChange={handleInput} name='name' placeholder="Enter name" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label htmlFor="commentemail-input" className="form-label">Email</label>
                                  <input type="email" className="form-control" name='email' onChange={handleInput} id="email" placeholder="Enter email" />
                                </div>
                              </div>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="commentemail-input" className="form-label">Phone</label>
                              <input type="number" className="form-control" name='phone' id="email" onChange={handleInput} placeholder="Enter phone no" />
                              {error && <small className="text-danger">{error}</small>}
                            </div>
                            <div className="mb-3">
                              <label htmlFor="commentmessage-input" className="form-label">Message</label>
                              <textarea className="form-control" name='message' id="message" onChange={handleInput} placeholder="Your message..." rows={3} defaultValue={""} />
                            </div>
                            <div className='col-lg-2'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="green"  onClick={handleSumbit}  className="bi bi-arrow-right-circle-fill me-3 zoom-icon" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                              </svg>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card body */}
            </div>
            {/* end card */}
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div> {/* container-fluid */}
    </div>
  
  </div>
</div>
<div className="text-white text-center py-5" data-aos="fade-right" style={{ background: "linear-gradient(to bottom, #0a0a23, #00bfa5)" }}>
            <h2 className="fs-4 fw-bold text-white">Let's talk!</h2> {/* Change text color to white */}
            <p className="mt-2">Reach out with questions or comments. We are here to help!</p>
            <button className="mt-3 btn btn-warning">
              <Link to="/contact" className="text-dark text-decoration-none">Contact us</Link>
            </button>
          </div>
    
          {/* Footer Section */}
          <footer data-aos="fade-left" className="bg-dark text-white py-5">
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

   </>
  )
}

export default Blogdetailes