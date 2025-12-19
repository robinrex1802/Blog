import React, { useEffect, useState } from 'react';
import './Categories.css'; // Import the CSS file
import axios from 'axios';
import Swal from 'sweetalert2'; 
import { Link, useNavigate } from 'react-router-dom';

function Bloglist() {
  const navigate = useNavigate();
  const [stateData, setStateData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("api/category/")
      .then(response => {
        setStateData(response.data)
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }, [])

  const handlesubmit = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`api/category/${id}/`)
          .then(() => {
            setStateData(stateData.filter(item => item.id !== id));
            Swal.fire(
              'Deleted!',
              'Your item has been deleted.', 
              'success'
            )
          })
          .catch((error) => {
            console.error("There was an error deleting the category!", error);
            Swal.fire(
              'Error!',
              'There was an error deleting the item.',
              'error'
            )
          }); 
      }
    })
  }

  const handleEdit = (id) => {
    navigate(`/EditCategory/${id}`);
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredData = stateData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div data-sidebar="dark">
        {/* Begin page */}
        <div id="layout-wrapper">
          <header id="page-topbar">
            <div className="navbar-header">
              <div className="d-flex">
                {/* LOGO */}
                <div className="navbar-brand-box">
                  <div className="logo logo-dark">
                    <span className="logo-sm">
                      <img src={require("./images/blog.jpeg")} height={22} />
                    </span>
                    <span className="logo-lg">
                      <img src={require("./images/blog.jpeg")} height={17} />
                    </span>
                  </div>
                </div>
               
                {/* App Search*/}
                <form className="app-search d-none d-lg-block">
                  <div className="position-relative">
                    <input type="text" className="form-control"  id="search" name="search" value={searchTerm} onChange={handleSearch} />
                    <span className="bx bx-search-alt" />
                  </div>
                </form>
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
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                      <h4 className="mb-sm-0 font-size-18">Category List</h4>
                    </div>
                  </div>
                </div>
                {/* end page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="table-rep-plugin">
                          <div className="table-responsive mb-0" data-pattern="priority-columns">
                            <table id="tech-companies-1" className="table table-striped">
                              <thead> 
                                <tr>
                                  <th>No</th>
                                  <th>Name</th>
                                  <th>Description</th>
                                  <th>Date</th>
                                  <th>Image</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  filteredData && filteredData.map(res => {
                                    return (
                                      <tr class="danger">
                                        <td>{res.id}</td>
                                        <td>{res.name}</td>
                                        <td>{res.description}</td>
                                        <td>{res.date}</td>
                                        <td><img src={res.image} width="100px" height="100px" /></td>
                                        <td>
                                          <div className="col-lg-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="red" className="bi bi-pencil-square me-3 zoom-icon" viewBox="0 0 16 16" onClick={() => handleEdit(res.id)}>
                                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                              <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                            </svg>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-2 mt-md-0 d-grid">
                                            <svg xmlns="http://www.w3.org/2000/svg" type='button' onClick={() => handlesubmit(res.id)} width="25" height="25" fill="green" className="bi bi-trash3-fill me-3 zoom-icon" viewBox="0 0 16 16">
                                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                            </svg>
                                          </div>
                                        </td>
                                      </tr>
                                    )
                                  })
                                }
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> {/* end col */}
                </div> {/* end row */}
              </div> {/* container-fluid */}
            </div>
            {/* End Page-content */}
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    © Blog.
                  </div>
                  <div className="col-sm-6">
                    <div className="text-sm-end d-none d-sm-block">
                      Design & Develop by Rex
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
  );
}

export default Bloglist;