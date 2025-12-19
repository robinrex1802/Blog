import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
                  <img src={require("./images/blog.jpeg")} alt height={22} />
                </span>
                <span className="logo-lg">
                  <img src={require("./images/blog.jpeg")} alt height={17} />
                </span>
              </a>
              <a href=" " className="logo logo-light">
                <span className="logo-sm">
                  <img src={require("./images/blog.jpeg")} alt height={22} />
                </span>
                <span className="logo-lg">
                  <img src={require("./images/blog.jpeg")} alt height={19} />
                </span>
              </a>
            </div>
            
          </div>
        </div>
      </header>
      {/* ========== Left Sidebar Start ========== */}
      <div className={`vertical-menu ${sidebarOpen ? 'open' : ''}`} style={{backgroundColor:'black'}}>
        <div data-simplebar className="h-100">
          {/*- Sidemenu */}
          <div id="sidebar-menu">
            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li>
                <a href=" " className="has-arrow waves-effect">
                  <i className="bx bx-home-circle" />
                  <span key="t-dashboards">Blogs</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                <li><Link to="/Home" key="t-default">Blog</Link></li>
                <li><Link to="/Bloglist" key="t-default">Categoris List</Link></li>
                <li><Link to="/List" key="t-default">Blog List</Link></li>
                {/* <li><Link to="/Userlist" key="t-sass">User List</Link></li> */}
                <li><Link to="/Commentslist" key="t-sass">Comments List</Link></li>
                </ul>
              </li>
              <li className="menu-title" key="t-apps">Blog </li>
              <li>
                <a href=" " className="has-arrow waves-effect">
                  <i className="bx bx-task" />
                  <span key="t-tasks">Manage Blogs</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                      <li><Link to="/Categories" key="t-sass">Categories</Link></li>
                      <li><Link to="/Createblog" key="t-sass">Create Blog</Link></li>
                    </ul>
              </li>
              <li>
                <a href=" " className="has-arrow waves-effect">
                  <i className="bx bxs-user-detail" />
                  <span key="t-contacts">Contacts</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                      <li><Link to="/Contactmnage" key="t-sass">Manage Contact</Link></li>
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
                      <li className="breadcrumb-item"><a href=" ">Dashboards</a></li>
                      <li className="breadcrumb-item active">Blog</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-lg-4" data-aos="fade-right">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <div className="d-flex flex-wrap">
                          <div className="me-3">
                            <p className="text-muted mb-2">Total Post</p>
                            <h5 className="mb-0">120</h5>
                          </div>
                          <div className="avatar-sm ms-auto">
                            <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                              <i className="bx bxs-book-bookmark" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                  <div className="col-lg-4" data-aos="fade-up">
                    <div className="card blog-stats-wid">
                      <div className="card-body">
                        <div className="d-flex flex-wrap">
                          <div className="me-3">
                            <p className="text-muted mb-2">Pages</p>
                            <h5 className="mb-0">86</h5>
                          </div>
                          <div className="avatar-sm ms-auto">
                            <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                              <i className="bx bxs-note" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4" data-aos="fade-left">
                    <div className="card blog-stats-wid">
                      <div className="card-body">
                        <div className="d-flex flex-wrap">
                          <div className="me-3">
                            <p className="text-muted mb-2">Comments</p>
                            <h5 className="mb-0">4,235</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end row */}
              </div>
              {/* end col */}
              <div className="col-xl-4" data-aos="fade-up">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <img src="assets/images/users/avatar-1.jpg" alt className="avatar-sm rounded-circle img-thumbnail" />
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <div className="text-muted">
                              <h5 className="mb-1">Robin Rex</h5>
                              <p className="mb-0">UI / UX Designer</p>
                            </div>
                          </div>
                        </div>
                        <hr />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-xl-4 col-lg-6" data-aos="fade-right">
                <div className="card">
                  <div className="card-header bg-transparent border-bottom">
                    <div className="d-flex flex-wrap align-items-start">
                      <div className="me-2">
                        <h5 className="card-title mt-1 mb-0">Posts</h5>
                      </div>
                     
                    </div>
                  </div>
                  <div className="card-body">
                    <div data-simplebar style={{maxHeight: 295}}>
                      {/* Tab panes */}
                      <div className="tab-content">
                        <div className="tab-pane active" id="post-recent" role="tabpanel">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item py-3">
                              <div className="d-flex">
                                <div className="me-3">
                                  <img src="assets/images/small/img-2.jpg" alt className="avatar-md h-auto d-block rounded" />
                                </div>
                                <div className="align-self-center overflow-hidden me-auto">
                                  <div>
                                    <h5 className="font-size-14 text-truncate"><a href=" " className="text-dark">Beautiful Day with Friends</a></h5>
                                    <p className="text-muted mb-0">10 Nov, 2020</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item py-3">
                              <div className="d-flex">
                                <div className="me-3">
                                  <img src="assets/images/small/img-6.jpg" alt className="avatar-md h-auto d-block rounded" />
                                </div>
                                <div className="align-self-center overflow-hidden me-auto">
                                  <div>
                                    <h5 className="font-size-14 text-truncate"><a href=" " className="text-dark">Drawing a sketch</a></h5>
                                    <p className="text-muted mb-0">02 Nov, 2020</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item py-3">
                              <div className="d-flex">
                                <div className="me-3">
                                  <img src="assets/images/small/img-2.jpg" alt className="avatar-md h-auto d-block rounded" />
                                </div>
                                <div className="align-self-center overflow-hidden me-auto">
                                  <div>
                                    <h5 className="font-size-14 text-truncate"><a href=" " className="text-dark">Project discussion with team</a></h5>
                                    <p className="text-muted mb-0">24 Oct, 2020</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item py-3">
                              <div className="d-flex">
                                <div className="me-3">
                                  <img src="assets/images/small/img-1.jpg" alt className="avatar-md h-auto d-block rounded" />
                                </div>
                                <div className="align-self-center overflow-hidden me-auto">
                                  <div>
                                    <h5 className="font-size-14 text-truncate"><a href=" " className="text-dark">Riding bike on road</a></h5>
                                    <p className="text-muted mb-0">20 Oct, 2020</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* end tab pane */}
                        
                        {/* end tab pane */}
                      </div>
                      {/* end tab content */}
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-xl-4 col-lg-6" data-aos="fade-left">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start">
                      <div className="me-2">
                        <h5 className="card-title mb-3">Comments</h5>
                      </div>
                    </div>
                    <div data-simplebar style={{maxHeight: 310}}>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item py-3">
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar-xs">
                                <div className="avatar-title rounded-circle bg-light text-primary">
                                  <i className="bx bxs-user" />
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h5 className="font-size-14 mb-1">Delores Williams <small className="text-muted float-end">1 hr Ago</small></h5>
                              <p className="text-muted">If several languages coalesce, the grammar of the resulting of the individual</p>
                              
                            </div>
                          </div>
                        </li>
                       
                        <li className="list-group-item py-3">
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar-xs">
                                <div className="avatar-title rounded-circle bg-light text-primary">
                                  <i className="bx bxs-user" />
                                </div>
                              </div>
                            </div>  
                            <div className="flex-grow-1">
                              <h5 className="font-size-14 mb-1">Keith McCoy <small className="text-muted float-end">12 Aug</small></h5>
                              <p className="text-muted">Donec posuere vulputate arcu. phasellus accumsan cursus velit</p>
                             
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-xl-4" data-aos="fade-right">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <h5 className="card-title mb-4">Activity</h5>
                      </div>
                    </div>
                    <div data-simplebar className="mt-2" style={{maxHeight: 280}}>
                      <ul className="verti-timeline list-unstyled">
                        <li className="event-list active">
                          <div className="event-timeline-dot">
                            <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right" />
                          </div>
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <h5 className="font-size-14">10 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" /></h5>
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                Posted <span className="fw-semibold">Beautiful Day with Friends</span> blog...
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle font-size-18" />
                          </div>
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <h5 className="font-size-14">08 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" /></h5>
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                If several languages coalesce, the grammar of the resulting... <a href="">Read</a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle font-size-18" />
                          </div>
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <h5 className="font-size-14">02 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" /></h5>
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                Create <span className="fw-semibold">Drawing a sketch blog</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle font-size-18" />
                          </div>
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <h5 className="font-size-14">24 Oct <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" /></h5>
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                In enim justo, rhoncus ut, imperdiet a venenatis vitae
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle font-size-18" />
                          </div>
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <h5 className="font-size-14">21 Oct <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" /></h5>
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center mt-4"><a href=" " className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ms-1" /></a></div>
                  </div>
                </div>
                {/* end card */}
              </div>
              {/* end col */}
              <div className="col-xl-8" data-aos="fade-left">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <h5 className="card-title mb-4">Popular post</h5>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table align-middle table-nowrap mb-0">
                        <tbody><tr>
                            <th scope="col" colSpan={2}>Post</th>
                            <th scope="col">Likes</th>
                            <th scope="col">Comments</th>
                          </tr>
                        </tbody><tbody>
                          <tr>
                            <td style={{width: 100}}><img src="assets/images/small/img-2.jpg" alt className="avatar-md h-auto d-block rounded" /></td>
                            <td>
                              <h5 className="font-size-13 text-truncate mb-1"><a href=" " className="text-dark">Beautiful Day with Friends</a></h5>
                              <p className="text-muted mb-0">10 Nov, 2020</p>
                            </td>
                            <td><i className="bx bx-like align-middle me-1" /> 125</td>
                            <td><i className="bx bx-comment-dots align-middle me-1" /> 68</td>
                          </tr>
                          <tr>
                            <td><img src="assets/images/small/img-6.jpg" alt className="avatar-md h-auto d-block rounded" /></td>
                            <td>
                              <h5 className="font-size-13 text-truncate mb-1"><a href=" " className="text-dark">Drawing a sketch</a></h5>
                              <p className="text-muted mb-0">02 Nov, 2020</p>
                            </td>
                            <td><i className="bx bx-like align-middle me-1" /> 102</td>
                            <td><i className="bx bx-comment-dots align-middle me-1" /> 48</td>
                          </tr>
                          <tr>
                            <td><img src="assets/images/small/img-1.jpg" alt className="avatar-md h-auto d-block rounded" /></td>
                            <td>
                              <h5 className="font-size-13 text-truncate mb-1"><a href=" " className="text-dark">Riding bike on road</a></h5>
                              <p className="text-muted mb-0">24 Oct, 2020</p>
                            </td>
                            <td><i className="bx bx-like align-middle me-1" /> 98</td>
                            <td><i className="bx bx-comment-dots align-middle me-1" /> 35</td>
                          </tr>
                          <tr>
                            <td><img src="assets/images/small/img-2.jpg" alt className="avatar-md h-auto d-block rounded" /></td>
                            <td>
                              <h5 className="font-size-13 text-truncate mb-1"><a href=" " className="text-dark">Project discussion with team</a></h5>
                              <p className="text-muted mb-0">15 Oct, 2020</p>
                            </td>
                            <td><i className="bx bx-like align-middle me-1" /> 92</td>
                            <td><i className="bx bx-comment-dots align-middle me-1" /> 22</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* end card */}
              </div>
              {/* end col */}
            </div>
            {/* end row */}
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
                  Develop by Rex
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* end main content*/}
    </div>
    {/* END layout-wrapper */}
    {/* Right Sidebar */}
    {/* /Right-bar */}
    {/* Right bar overlay*/}
  </div>
   </>
  )
}

export default Home