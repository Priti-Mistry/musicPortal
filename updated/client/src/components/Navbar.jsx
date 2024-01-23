import { Button, Menu } from 'antd'
import { Link } from 'react-router-dom'
function Navbar() {

  const signOut=()=>{
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
  }

  return (
    <Menu
      mode='horizontal'
    >
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      {
        !localStorage.getItem('username')?
      
      (<>
      <Menu.Item>
        <Link to="/signup">SignUp</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/signin">SignIn</Link>
      </Menu.Item>
      </>) :
      (
        <>
        <b>Welcome, {localStorage.getItem('username') }</b>
        <Menu.Item>
         <Button onClick={signOut}>SignOut</Button>
      </Menu.Item>
        </>
      )


      }

    </Menu>
  )
}

export default Navbar