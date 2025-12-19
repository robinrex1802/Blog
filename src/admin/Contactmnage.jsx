import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Contactmnage() {

const [input, setInput] = useState([]);
const [filter, setFilter] = useState("");
console.log(input)

useEffect(() => {
  axios.get("api/contact/") 
    .then(response => {
      setInput(response.data)
    })
    .catch((error) => {
      console.error("There was an error fetching the user!", error);
    });
  }, [])

  return ( 
    <>
  <div>
  {/* <body data-layout="horizontal" data-topbar="dark"> */}
  {/* Begin page */}
  <div id="layout-wrapper">
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a  className="logo logo-dark">
              <span className="logo-sm">
                <img src="assets/images/blog.jpeg" alt height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/blog.jpeg" alt height={17} />
              </span>
            </a>
            <a  className="logo logo-light">
              <span className="logo-sm">
                <img src="assets/images/blog.jpeg" alt height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/blog.jpeg" alt height={19} />
              </span>
            </a>
          </div>
         
          {/* App Search*/}
          <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search..." 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)} 
              />
              <span className="bx bx-search-alt" />
            </div>
          </form>
        </div>
      </div>
    </header>
    {/* ========== Left Sidebar Start ========== */}
    <div className="vertical-menu" style={{backgroundColor:'black'}}>
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
                <li><a  key="t-blog">Blog</a></li>
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
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">Users List</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="">Contacts</a></li>
                    <li className="breadcrumb-item active">Users List</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* end page title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-2">
                   
                    
                  </div>
                  {/* end row */}
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover dt-responsive nowrap w-100" id="userList-table">
                      <thead className="table-light">
                        <tr>
                          <th  >No</th>
                          <th >Name</th>
                          <th >Email</th>
                          <th >Phone</th>
                          <th >Message</th>
                          
                          
                        </tr>
                        
                      </thead>
                      <tbody>
                        {
                          input
                            .filter(item => 
                              item.name.toLowerCase().includes(filter.toLowerCase()) || 
                              item.email.toLowerCase().includes(filter.toLowerCase()) || 
                              String(item.phone).includes(filter) || // Convert phone to string
                              item.message.toLowerCase().includes(filter.toLowerCase())
                            )
                            .map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{item.name}</td>
                                  <td>{item.email}</td>
                                  <td>{item.phone}</td>
                                  <td>{item.message}</td>
                                </tr>
                              );
                            })
                        }
                      </tbody>
                    </table>
                    {/* end table */}
                  </div>
                  {/* end table responsive */}
                </div>
              </div>
            </div>
          </div>
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

export default Contactmnage