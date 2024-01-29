import {  useContext, useEffect, useState } from "react";
import { Button, Form, Input, Flex, Anchor } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/auth/authSlice";
import axios from 'axios'
import { AuthContext } from "../helpers/AuthContext";

function SignIn() {
   const { authState,setAuthState } = useContext(AuthContext);
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
  },[authState]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataSent, setdataSent] = useState(false);

  const onFinish = () => {
    dispatch(signIn(formData));
    setdataSent(true);
  };
  const error = useSelector((state) => state.user.error);
  useEffect(() => {
    if (dataSent) {
      error ? alert(error) : 
          navigate("/")
    }
  }, [error,dataSent,authState]);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Flex justify="center" className="form-container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            { type: "email" },
          ]}
          hasFeedback
        >
          <Input
            placeholder="youMail@gmail.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="******"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
          <Anchor>
            <Link to="/signup">Craete Account</Link>
          </Anchor>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default SignIn;
