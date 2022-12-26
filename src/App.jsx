import './App.css';

import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import Profile from "./components/profile";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");


  useEffect(() => {
    const auth = getAuth();
    
    console.log("auth.currentuser : ", auth.currentUser);

    setFullName(auth.currentUser);

    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is log in or signed in
        const uid = user.uid;
        setIsLogin(true)

        setFullName(auth.currentUser.displayName);
      }

      else {
        // User is signed out
        setIsLogin(false)
      }

    });
    
    return () => {
      unSubscribe();
    }
    
    // empty array used to run code only once
  }, []);


  const logoutHandler = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }



  return (
    <div>
      {/* <button onClick={() => { setIsLogin(!isLogin) }}>Toggle Test Button</button> */}

      {
        (isLogin) ?
          <ul className='navBar'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/gallery'}>Gallery</Link></li>
            <li><Link to={'/profile'}>Profile</Link></li>
            <li>{ fullName }<button onClick={logoutHandler}>Log-Out</button></li>
            

          </ul>
          :
          <ul className='navBar'>
            <li><Link to={'/'}>Login</Link></li>
            <li><Link to={'/signup'}>Signup</Link></li>
          </ul>
      }

      {
        (isLogin) ?
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
          :
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
      }

    </div>
  );
}

export default App;
