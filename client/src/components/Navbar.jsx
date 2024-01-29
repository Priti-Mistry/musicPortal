import { Button, Menu } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
function Navbar() {
  const navigate = useNavigate();
  const { authState, setAuthState } = useContext(AuthContext);

  const signOut = () => {
    localStorage.clear();
    setAuthState({
      username: "",
      id: 0,
      status: false,
    });
    navigate("/");
  };

  const id = localStorage.getItem("id");
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/allMusicCds">All Music CDs</Link>
      </Menu.Item>
      {!authState.status ? (
        <>
          <Menu.Item>
            <Link to="/signup">SignUp</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/signin">SignIn</Link>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item>
            <b
              onClick={() => {
                navigate(`/sellerProfile/${id}`);
              }}
            >
              {authState.username}
            </b>
          </Menu.Item>
          <Menu.Item>
            <Button onClick={signOut}>SignOut</Button>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
}

export default Navbar;
