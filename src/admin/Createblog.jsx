import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Categories.css'; 
import axios from 'axios';
import Swal from 'sweetalert2';

function Createblog() {
  // Initialize input state with required fields
  const [input, setInput] = useState({
    name: '',
    category: '',
    description: '',
    date: '',
    author: '',
    image: null,
    quates: ''
  });
  console.log(input);

  const handleInput = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setInput({ ...input, [name]: files[0] });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSubmit = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to create this blog?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, create it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        for (const key in input) {
          formData.append(key, input[key]);
        }

        axios.post(`api/blog/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(res => {
            console.log("res", res);
            Swal.fire({
              icon: 'success',
              title: 'Blog Created',
              text: 'Your blog has been created successfully!',
            });
          })
          .catch(err => {
            console.error("Error:", err.response);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'There was an error creating your blog.',
            });
          });
      }
    });
  };

  const [category, setCategory] = useState([]);
  console.log(category);

  useEffect(() => {
    axios.get("/api/category/")
      .then((res) => {
        setCategory(res.data);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div>
        {/* Begin page */}
        <div id="layout-wrapper">
          <header id="page-topbar">
            <div className="navbar-header">
              <div className="d-flex">
                {/* LOGO */}
                <div className="navbar-brand-box" data-aos="fade-down">
                  <a href="" className="logo logo-dark">
                    <span className="logo-sm">
                      <img src="assets/images/blog.jpeg" alt height={22} />
                    </span>
                    <span className="logo-lg">
                      <img src="assets/images/blog.jpeg" alt height={17} />
                    </span>
                  </a>

                </div>
             
              </div>
            </div>
          </header>
          {/* ========== Left Sidebar Start ========== */}
          <div className="vertical-menu" style={{ backgroundColor: 'black' }} data-aos="fade-right">
            <div data-simplebar className="h-100">
              {/*- Sidemenu */}
              <div id="sidebar-menu">
                {/* Left Menu Start */}
                <ul className="metismenu list-unstyled" id="side-menu">
                  <li>
                    <a href="" className="has-arrow waves-effect">
                      <i className="bx bx-home-circle" />
                      <span key="t-dashboards">Blogs</span>
                    </a>
                    <ul className="sub-menu" aria-expanded="false">
                      <li><a href="" key="t-blog">Blog</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* Sidebar */}
            </div>
          </div>
          {/* Left Sidebar End */}
          {/* ============================================================== */}
          {/* Start right Content here */}
          {/* ============================================================== */}
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between" data-aos="fade-up">
                      <h4 className="mb-sm-0 font-size-18">Blog</h4>
                      <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item"><a href="">Blog</a></li>
                          <li className="breadcrumb-item active">Create Blog</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card" data-aos="fade-left">
                      <div className="card-body">
                        <h4 className="card-title mb-4">Create New Blog</h4>
                        <form className="outer-repeater" method="post">
                          <div data-repeater-list="outer-group" className="outer">
                            <div data-repeater-item className="outer">
                              <div className="form-group row mb-4">

                                <div className="col-lg-10">
                                  <input id="name" name="name" type="text" onChange={handleInput}  className="form-control" placeholder="Enter Blog Name..." />
                                </div>
                              </div>
                              <div className="form-group row mb-4">

                                <div className="col-lg-10">
                                 
                                    <select className="form-select" id="formSelect" value={input.category} name='category' onChange={handleInput} aria-label="Default select example">
                                      <option value='category'>Category</option>

                                      {
                                        category?.map((res) => {
                                          return (
                                            <>
                                              <option value={res.id}>{res.name}</option>
                                            </>
                                          )
                                        })
                                      }
                                    
                                    </select>
                                  
                               
                                  
                                </div>
                              </div>
                              <div className="form-group row mb-4">

                                <div className="col-lg-10">
                                  <textarea className="form-control" onChange={handleInput} name="description"  placeholder='Blog Description...' />
                                </div>
                              </div>
                              <div className="form-group row mb-4">  

                                <div className="col-lg-10">
                                  <div className="input-daterange input-group" data-provide="datepicker">
                                    <input type="date" className="form-control" onChange={handleInput} placeholder="Date"  name="date" />
                                  </div>
                                </div>
                              </div>
                              <div className="inner-repeater mb-4">
                                <div data-repeater-list="inner-group" className="inner form-group mb-0 row">

                                  <div data-repeater-item className="inner col-lg-10 ms-md-auto">
                                    <div className="mb-3 row align-items-center">
                                      <div className="col-md-6">
                                        <input type="text" className="inner form-control" onChange={handleInput}  name='author' placeholder="Posted By..." />
                                      </div>
                                      <div className="col-md-4">
                                        <div className="mt-4 mt-md-0">
                                          <input className="form-control" onChange={handleInput}  type="file" id="formFile" name='image' />
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div className="mt-2 mt-md-0 d-grid">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green"  className="bi bi-trash3-fill me-3 zoom-icon" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-lg-10">
                           

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row mb-4">

                                <div className="col-lg-10">
                                  <input id="taskbudget" name="quates"  type="text" onChange={handleInput} placeholder="Enter The Quates..." className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="row justify-content-end">
                        
                          <div className='col-lg-2'> 
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleSubmit} width="35" height="35" fill="blue"  className="bi bi-arrow-right-circle-fill me-3 zoom-icon" viewBox="0 0 16 16">
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end row */}
              </div> {/* container-fluid */}
            </div>
            {/* End Page-content */}
            <footer className="footer" >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    © Blog.
                  </div>
                  <div className="col-sm-6">
                    <div className="text-sm-end d-none d-sm-block">
                      Design &amp; Develop by Rex
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* end main content*/}
        </div>
      
      </div>

    </>
  )
}

export default Createblog