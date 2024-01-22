// import {Formik, Form,Field,ErrorMessage} from 'formik'
// import * as Yup from 'yup'
import { Button, DatePicker, Form, Input, Flex, Select,TimePicker ,InputNumber} from "antd";
import { useState } from "react";
import dayjs from 'dayjs'

function AddMusicCDs() {
  // const initialValues={
  //     album_name:'',
  //     singer : '',
  //     composer_name:'',
  //     launch_date:'',
  //     place:'',
  //     genre:'',
  //     record_label:'',
  //     total_track:'',
  //     duration:'',
  //     format:'',
  //     price:''
  // }

  // const validationSchema=Yup.object().shape({
  //     album_name:Yup.string().required('Required Field'),
  //     singer:Yup.string().required('Required Field'),
  //     composer_name:Yup.string().required('Required Field'),
  //     place:Yup.string().required('Required Field'),
  //     record_label:Yup.string().required('Required Field'),
  //     total_track:Yup.number().required('Required Field'),
  //     price:Yup.number().required('Required Field')
  // })
  const [formData, setFormData] = useState({
    album_name: "",
    singer: "",
    composer_name: "",
    launch_date: "",
    place: "",
    genre: [
      'classical','pop music','jazz'
    ],
    record_label: "",
    total_track: "",
    duration: 0,
    format: [
      '.pcm','.wav','.aiff',
      '.mp3'
    ],
    price: 0,
  });
  const onFinish = (values) => {
    // axios.post("http://localhost:5000/signin",formData,{
    //   headers:{
    //     accessToken:localStorage.getItem('jwtToken')
    //   }
    // })
    // .then((res)=>{
    //     localStorage.setItem("jwtToken",res.data.token)
    //     console.log(res)
    // })
    // .catch((err)=>
    // console.log(err.message));
    console.log("Success:", values);
    console.log(formData);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Flex justify="center" style={{ marginTop: "20px" }}>
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 800,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Album Name"
          name="album_name"
          rules={[
            {
              required: true,
              message: "Please input Album Name!",
            },
          ]}
        >
          <Input
            placeholder="album name"
            value={formData.album_name}
            onChange={(e) => {
              setFormData({ ...formData, album_name: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Singer"
          name="singer"
          rules={[
            {
              required: true,
              message: "Please input singer name!",
            },
          ]}
        >
          <Input
            placeholder="singer name"
            value={formData.singer}
            onChange={(e) => {
              setFormData({ ...formData, singer: e.target.value });
            }}
          />
        </Form.Item>

        <Form.Item
          label="Composer Name"
          name="composer_name"
          rules={[
            {
              required: true,
              message: "Please input composer name!",
            },
          ]}
        >
          <Input
            placeholder="composer name"
            value={formData.composer_name}
            onChange={(e) => {
              setFormData({ ...formData, composer_name: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Launch Date"
          name="launch_date"
          rules={[
            {
              required: true,
              message: "Please select launch date!",
            },
          ]}
        >
          <DatePicker value={formData.launch_date}
            onChange={(e)=>setFormData({...formData,launch_date:e.target.value})}/>
        </Form.Item>

        <Form.Item
          label="Place"
          name="place"
          rules={[
            {
              required: true,
              message: "Please input place!",
            },
          ]}
        >
          <Input
            placeholder="place name"
            value={formData.place}
            onChange={(e) => {
              setFormData({ ...formData, place: e.target.value });
            }}
          />
        </Form.Item>

        <Form.Item
          label="Genre"
          name="genre"
          rules={[
            {
              required: true,
              message: "Please select!",
            },
          ]}
        >
          <Select onChange={(e)=>setFormData({...formData,genre:[e.target.value]})}>
            {formData.genre.map((g,index)=>(
              <Select.Option key={index} value={g}>{g}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Record Label"
          name="record label"
          rules={[
            {
              required: true,
              message: "Please input record label!",
            },
          ]}
        >
          <Input
            placeholder="reacord label"
            value={formData.record_label}
            onChange={(e) => {
              setFormData({ ...formData, record_label: e.target.value });
            }}
          />
        </Form.Item>

        <Form.Item
          label="Total Track"
          name="total track"
          rules={[
            {
              required: true,
              message: "Please input total track!",
            },
          ]}
        >
          <Input
            placeholder="total track"
            value={formData.total_track}
            onChange={(e) => {
              setFormData({ ...formData, total_track: e.target.value });
            }}
          />
        </Form.Item>

        <Form.Item
          label="Duration"
          name="duration"
          rules={[
            {
              required: true,
              message: "Please input duration",
            },
          ]}
        >
          <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} value={formData.duration} onChange={e=>setFormData({...formData,duration:e.target.value})}/>
        </Form.Item>

        <Form.Item
          label="Format"
          name="format"
          rules={[
            {
              required: true,
              message: "Please select!",
            },
          ]}
        >
          <Select>
            <Select.Option value="op1">op1</Select.Option>
            <Select.Option value="op2">op2</Select.Option>
            <Select.Option value="op3">op3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              type:'number',
              message: "Please input price",
            },
          ]}
        >
          <InputNumber
            placeholder="price"
            value={formData.price}
            onChange={(e) => {
              setFormData({ ...formData, price: e.target.value });
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
            Add
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default AddMusicCDs;
