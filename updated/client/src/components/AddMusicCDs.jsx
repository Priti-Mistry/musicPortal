import {
  Button,
  DatePicker,
  Form,
  Input,
  Flex,
  Select,
  TimePicker,
  InputNumber,
} from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { addMusicCd } from "../redux/MusicCds/MusicCdsSlice";
// import { signUp } from "../redux/auth/authSlice";


function AddMusicCDs() {
  
  const [formData, setFormData] = useState({});
  const dispatch=useDispatch()
  // const dispatch=useDispatch()
  const getMusicDetail = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = (values) => {
    dispatch(addMusicCd(formData)).then(()=>{
      console.log("Success:", values);
      console.log(formData);
    }).catch((error)=>{
      console.log("error : "+error.message)
    })
    
    // dispatch(signUp(formData))
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
            name="album_name"
            onChange={getMusicDetail}
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
            name="singer"
            onChange={getMusicDetail}
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
            name="composer_name"
            onChange={getMusicDetail}
          />
        </Form.Item>

          <Form.Item
            label="Launch Date"
          >
          <input type="date" name="launch_date" onChange={getMusicDetail} />
          </Form.Item>

        {/* <Form.Item
          label="Launch Date"
          name="launch_date"
          rules={[
            {
              required: true,
              message: "Please select launch date!",
            },
          ]}
        >
          <input type="date" name="launch_date" onChange={getMusicDetail} />
        </Form.Item> */}

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
            name="place"
            onChange={getMusicDetail}
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

          <select name='genre' onChange={getMusicDetail}>
            <option value="sad">sad</option>
            <option value="pop">pop</option>
            <option value="jazz">jazz</option>
          </select>

          {/* <Select
            name="genre"
            onClick={getMusicDetail}
          >
            <Select.Option value="sad"> SAD</Select.Option>
            <Select.Option value="pop"> POP</Select.Option>
            <Select.Option value="jazz"> JAZZ</Select.Option>
            <Select.Option value="party"> PARTY</Select.Option> */}
            
            {/* {formData.genre.map((g, index) => (
              <Select.Option key={index} value={g}>
                {g}
              </Select.Option>
            ))} */}
          {/* </Select> */}
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
            name="record_label"
            onChange={getMusicDetail}
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
            name="total_track"
            onChange={getMusicDetail}
          />
        </Form.Item>

        <Form.Item
          label="Duration"
          name="duration"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <input type="time" name="duration" onChange={getMusicDetail} />
        </Form.Item>

        <Form.Item
          label="Format"
        >
          <select name='format' onChange={getMusicDetail}>
            <option value=".mp4">.mp4</option>
            <option value=".aiff">.aiff</option>
          </select>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price",
            },
          ]}
        >
          <input type="number" name="price" onChange={getMusicDetail} />
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
