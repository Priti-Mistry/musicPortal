import { useRoutes } from "react-router-dom";

import Footer_ from "./components/Footer_";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { Flex, Layout } from "antd";
import { Footer } from "antd/es/layout/layout";
import AddMusicCDs from "./components/AddMusicCDs";
import { useSelector } from "react-redux";
// import AllMusicList from "./components/AllMusicList";

function App() {

  const users=useSelector(state=>state.user)
  console.log(users)
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
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
      path: "/addMusic",
      element: <AddMusicCDs />,
    },
  ]);
  return (
    <>
      <Flex>
        <Layout>
          <Navbar />
          
          {element}
          <Footer>
            <Footer_ />
          </Footer>
        </Layout>
      </Flex>
      {/* 
      <Navbar/>
      
      
      {element}
      <Flex justify='center' align='flex-end'>
      <Footer_/>
      </Flex> */}
    </>
  );
}

export default App;
