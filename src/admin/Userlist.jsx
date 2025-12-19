import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
function Userlist() {

const [input, setInput] = useState([]);
// console.log(input)
   
useEffect(() => {
  axios.get("api/register/")
    .then(response => {
      setInput(response.data)
    })
    .catch((error) => {
      console.error("There was an error fetching the user!", error);
    });
  }, [])


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
          <a href="" className="logo logo-dark">
            <span className="logo-sm">
              <img src="assets/images/blog.jpeg" alt height={22} />
            </span>
            <span className="logo-lg">
              <img src="assets/images/blog.jpeg" alt height={17} />
            </span>
          </a>
          
        </div>
        <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
          <i className="fa fa-fw fa-bars" />
        </button>
        {/* App Search*/}
        <form className="app-search d-none d-lg-block">
          <div className="position-relative">
            <input type="text" className="form-control" />
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
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">User List</h4>
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
                          <th >User Name</th>
                          <th >Email</th>
                          <th >DOB</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        {
                          input.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.dob}</td>
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

export default Userlist