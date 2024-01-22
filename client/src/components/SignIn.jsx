import {useState} from 'react'
import { Button, Form, Input,Flex, Anchor } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios'

function SignIn() {
    const [formData,setFormData]=useState({
        
        email:'',password:''
        
    });
    const onFinish = (values) => {
        axios.post("http://localhost:5000/signin",formData)
        .then((res)=>{
            localStorage.setItem("jwtToken",res.data.token)
            console.log(res)
        })
        .catch((err)=>
        console.log(err.message));
        console.log('Success:', values);
        console.log(formData);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
  return (
    <Flex justify='center' style={{marginTop:'20px'}}> 
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
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input placeholder="youMail@gmail.com"
                    value={formData.email}
                    onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
                />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password placeholder="******"
                    value={formData.password}
                    onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
                />
            </Form.Item>

            
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Anchor>
                        <Link to="/signup">Craete Account</Link>
                    </Anchor>
            </Form.Item>
        </Form>
        </Flex>
  )
}

export default SignIn