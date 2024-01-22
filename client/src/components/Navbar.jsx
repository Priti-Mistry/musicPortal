import { Menu } from 'antd'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <Menu
      mode='horizontal'
    >
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/signup">SignUp</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/signin">SignIn</Link>
      </Menu.Item>

    </Menu>
  )
}

export default Navbar