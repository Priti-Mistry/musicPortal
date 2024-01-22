import { useState } from 'react'
import { Button, Form, Input, Flex, Anchor } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
        
    });
    const onFinish = (values) => {
        axios.post('http://127.0.0.1:5000/signup',{
            username:formData.name,
            email:formData.email,
            password:formData.password
        })
        .then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            alert(err)
        })
        console.log('Success:', values);
        console.log(formData);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Flex justify='center' style={{ marginTop: '20px' }}>
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
                        },
                    ]}
                >
                    <Input placeholder="YourName"
                        value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
                    />
                </Form.Item>
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
                        },
                    ]}
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
                        Submit
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