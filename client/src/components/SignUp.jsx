import { useState } from 'react'
import { Button, Form, Input, Flex, Anchor } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/auth/authSlice';
import './style.css'


function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
        
    });
    const dispatch=useDispatch();
    const navigate = useNavigate()
    const onFinish = (values) => {
       dispatch(signUp(formData)).then(()=>{
        console.log('Success:', values);
        navigate("/signin")
       }
       ).catch((err)=>{
        console.log(err)
       })
       
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Flex justify='center' className='form-container'>
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
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },{
                            min:5
                        }
                    ]}hasFeedback
                >
                    <Input placeholder="YourName"
                        value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, username: e.target.value }) }}
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },{
                            type:"email"
                        }
                    ]}hasFeedback
                >
                    <Input placeholder="youMail@gmail.com"
                        value={formData.email}
                        onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },{
                            min:5
                        },{max:15}
                    ]}hasFeedback
                >
                    <Input.Password placeholder="******"
                        value={formData.password}
                        onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Sign Up
                    </Button>
                    <Anchor>
                        <Link to="/signin">Already have an Account</Link>
                    </Anchor>
                </Form.Item>
            </Form>

        </Flex>
    )
}

export default SignUp