import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Categories.css'; // Import the CSS file
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert

function Categories() {

  const [input, setInput] = useState({
    name: '',
    description: '',
    date: '',   
    image: null
  });

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setInput({ ...input, [name]: files[0] });
    } else {
      setInput({ ...input, [name]: value });
    }
  } 

  const handleSumbit = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to create this category?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, create it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('description', input.description);
        formData.append('date', input.date);
        formData.append('image', input.image);

        axios.post(`api/category/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(res => {
            console.log("res", res);
            Swal.fire(
              'Created!',
              'Your category has been created.',
              'success'
            )
          })
          .catch(error => {
            console.error("There was an error creating the category!", error);
            Swal.fire(
              'Error!',
              'There was an error creating the category.',
              'error'
            )
          });
      }
    })
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
              <div className="navbar-brand-box">
                <a href="" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="assets/images/blog.jpeg" alt="logo" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/blog.jpeg" alt="logo" height={17} />
                  </span>
                </a>
                <a href="" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="assets/images/blog.jpeg" alt="logo" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/blog.jpeg" alt="logo" height={19} />
                  </span>
                </a>
              </div>
              
            </div>
          </div>
        </header>
        {/* ========== Left Sidebar Start ========== */}
        <div className="vertical-menu" style={{ backgroundColor: 'black' }}>
          <div data-simplebar className="h-100">
            {/*- Sidemenu */}
            <div id="sidebar-menu">
              {/* Left Menu Start */}
              <ul className="metismenu list-unstyled" id="side-menu">
                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="bx bx-home-circle" />
                    <span>Blog</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><Link to="/Home" key="t-default">Blog</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Sidebar */} 
          </div>
        </div>
      
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between" data-aos="fade-up">
                    <h4 className="mb-sm-0 font-size-18">Create Category</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><a href="">Categories</a></li>
                        <li className="breadcrumb-item active">Create Categories</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card" data-aos="fade-up">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Create New Categories</h4>
                      <form className="outer-repeater" method="post">
                        <div data-repeater-list="outer-group" className="outer">
                          <div data-repeater-item className="outer">
                            <div className="form-group row mb-4">
                              <div className="col-lg-10">
                                <input id="taskname" name="name" type="text" className="form-control" onChange={handleInput} placeholder="Enter Category Name..." />
                              </div>
                            </div>
                            <div className="form-group row mb-4">

                              <div className="col-lg-10">
                                <textarea className="form-control" name="description" onChange={handleInput} placeholder='category description' defaultValue={""} />
                              </div>
                            </div>
                            <div className="form-group row mb-4">

                              <div className="col-lg-10">
                                <div className="input-daterange input-group" data-provide="datepicker">
                                  <input type="date" className="form-control" placeholder="Date" name="date" onChange={handleInput} />
                                </div>
                              </div>
                            </div>
                            <div className="inner-repeater mb-4">
                              <div data-repeater-list="inner-group" className="inner form-group mb-0 row">

                                <div data-repeater-item className="inner col-lg-10 ms-md-auto">
                                  <div className="mb-3 row align-items-center">
                                    <div className="col-md-4">
                                      <div className="mt-4 mt-md-0">
                                        <input className="form-control" type="file" name="image" onChange={handleInput} />
                                      </div>
                                    </div>
                                    <div className="col-md-2"> 
                                        <div className="mt-2 mt-md-0 d-grid">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className="bi bi-trash3-fill me-3 zoom-icon" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                          </svg>
                                        </div>
                                      </div>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="row justify-content-end">
                      <div className="col-lg-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="red" className="bi bi-pencil-square me-3 zoom-icon" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                          </div>
                                   
                         
                          <div className='col-lg-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="blue"  onClick={handleSumbit}  className="bi bi-arrow-right-circle-fill me-3 zoom-icon" viewBox="0 0 16 16">
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
          <footer className="footer" data-aos="fade-up">
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
      </div>
    </>
  )
}

export default Categories