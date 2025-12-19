import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2' // Import SweetAlert

function Adlogin() {
  const [Name, setName] = useState('')
  const [Password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false) 
  const navigate = useNavigate()
  const users = {
    Name: "admin",
    Password: "admin",
  } 

  useEffect(() => {
    document.body.style.backgroundColor = 'lightgrey'; 
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/Adlogin') 
    }
  }, [isLoggedIn, navigate])

  function onhandleevent() {
    if (Name === users.Name && Password === users.Password) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back, Admin!',
      }).then(() => {
        setIsLoggedIn(true) // Set login status to true
        navigate('/Home')
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        text: 'Please provide valid details.',
      })
    }
  }

  return (
  <>
 <div className="account-pages my-5 pt-sm-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-5">
        <div className="card overflow-hidden">
          <div className="bg-primary-subtle">
            <div className="row">
              <div className="col-7">
                <div className="text-primary p-4">
                  <h5 className="text-primary">Welcome Back Admin !</h5>
                  <p>Sign in to control the Blog.</p>
                </div>
              </div>
              <div className="col-5 align-self-end">
                <img   src={require("./images/profile-img.png")}    alt className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="card-body pt-0"> 
            <div className="auth-logo">
              <a href="index.html" className="auth-logo-light">
                <div className="avatar-md profile-user-wid mb-4">
                  <span className="avatar-title rounded-circle bg-light">
                    <img src={require("./images/blog.jpeg")} alt className="rounded-circle" height={34} />
                  </span>
                </div>
              </a>
              <a href="index.html" className="auth-logo-dark">
                <div className="avatar-md profile-user-wid mb-4">
                  <span className="avatar-title rounded-circle bg-light">
                    <img src={require("./images/blog.jpeg")} alt className="rounded-circle" height={34} />
                  </span>
                </div>
              </a>
            </div>
            <div className="p-2">
              <form className="form-horizontal" action="index.html">
                <div className="mb-3">
                 
                  <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={(e) => { setName(e.target.value) }} />
                </div>
                <br/>
                <div className="mb-3">
                  
                  <div className="input-group auth-pass-inputgroup">
                    <input type="password" className="form-control" placeholder="Enter password" aria-label="Password" onChange={(e) => { setPassword(e.target.value) }} aria-describedby="password-addon" />
                    <button className="btn btn-light " type="button" id="password-addon"><i className="mdi mdi-eye-outline" /></button>
                  </div>
                </div>
                
                <div className="mt-3 d-grid">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" onClick={onhandleevent} className="bi bi-arrow-right-square-fill zoom-icon" viewBox="0 0 16 16">
                          <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0-2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
                        </svg>
                </div>
              </form> 
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <div>
            {/* <p>Don't have an account ? <a href="register.html" className="fw-medium text-primary"> Signup now </a> </p> */}
            <p>©  Blog. Crafted with <i className="mdi mdi-heart text-danger" /> by Rex</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default Adlogin