import { BrowserRouter as Router, Route, Routes ,Navigate,Outlet} from 'react-router-dom';
import Adlogin from './admin/Adlogin';
import Bloglist from './admin/Bloglist';
import Categories from './admin/Categories';
import Contactmnage from './admin/Contactmnage';
import Createblog from './admin/Createblog';
import Home from './admin/Home';
import Userlist from './admin/Userlist';
import About from './user/About';
import Blog from './user/Blog';
import Blogdetailes from './user/Blogdetailes';
import Contact from './user/Contact';
import Index from './user/Index';
import Login from './user/Login';
import Register from './user/Register';
import EditCategory from './admin/EditCategory';
import List from './admin/List';
import Commentslist from './admin/Commentslist';
import Edit from './admin/Edit';
import { useState } from 'react';

function App() {

  const [auth, setAuth] = useState();

  const PrivateRoute = () => {
    return (
      auth ? <Outlet /> : <Navigate to='/Adlogin' />
    )
  }

  return (
    <>
    

<Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Blogdetailes" element={<Blogdetailes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
  

        
      </Routes>
    </Router>
    
    
    <Router>
      <Routes>
      <Route path='/Adlogin' element={<Adlogin test={setAuth} />} />
       <Route element={<PrivateRoute />}></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/Bloglist" element={<Bloglist />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contactmnage" element={<Contactmnage />} />
        <Route path="/createblog" element={<Createblog />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path='/List' element={<List/>}/>
        <Route path="/Commentslist" element={<Commentslist />} />
        <Route path="/EditCategory/:id" element={<EditCategory />} />
        <Route path="/Edit/:id" element={<Edit/>} />
        
      </Routes>
    </Router>
  
    </>
  );
}

export default App;
