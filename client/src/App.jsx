import { useRoutes } from "react-router-dom";

import Footer_ from "./components/Footer_";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import AddMusicCDs from "./components/AddMusicCDs";
import { Flex, Layout } from "antd";
import { Footer } from "antd/es/layout/layout";
// import AllMusicList from "./components/AllMusicList";

function App() {
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
