import { useRoutes } from "react-router-dom";
import {  useEffect } from "react";
import axios from 'axios'

import Footer_ from "./components/Footer_";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import AddMusicCDs from "./components/AddMusicCDs";
import SellerProfile from "./components/SellerProfile";
import EditMusicCds from "./components/EditMusicCds";
import AllMusicList from "./components/AllMusicList";
import { AuthContext } from './helpers/AuthContext'
import { useState } from "react";


function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false
  });

  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    }, {
      path: "/allMusicCds",
      element: <AllMusicList />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/addMusic/:id",
      element: <AddMusicCDs />,
    },
    {
      path: "/sellerProfile/:id",
      element: <SellerProfile />,
    },
    {
      path: "/editMusicbySeller/:id",
      element: <EditMusicCds />,
    },
  ]);
  const getUser=async()=>{
    const res= await axios.get('http://localhost:5000/users/auth',{
      headers:{
        "jwtToken":localStorage.getItem("jwtToken")
      }
    });
    if(!res.data.error){
      // console.log(res);
      setAuthState({
      username: res.data.username,
      id: res.data.id,
      status: true,
    });
    }
  }
  useEffect(()=>{
    getUser()
    // console.log("auth : ",authState)
  },[authState]);
  return (
    <AuthContext.Provider value={{authState,setAuthState}}>
<>
      <Navbar />
      {element}
      <Footer_ />
    </>
    </AuthContext.Provider>
    
  );
}

export default App;
