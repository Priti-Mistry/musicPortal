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
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useDispatch } from "react-redux";
import { addMusicCd } from "../redux/MusicCds/MusicCdsSlice";
// import { signUp } from "../redux/auth/authSlice";

function AddMusicCDs() {
  dayjs.extend(customParseFormat);
  const [formData, setFormData] = useState({
    album_name: "",
    singer: "",
    composer_name: "",
    launch_date: "",
    place: "",
    genre: '',
    record_label: "",
    total_track: "",
    duration: 0,
    format: '',
    price: 0,
  });
  // const dispatch = useDispatch();
  const dispatch=useDispatch()
  // const getMusicDetail = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const onFinish = (values) => {

    dispatch(addMusicCd(formData))
      .then(() => {
        console.log("Success:", values);
        console.log(formData);
      })
      .catch((error) => {
        console.log("error : " + error.message);
      });

    // console.log(formData);
    // alert("data added")
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
        
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Album Name"
          name="album_name"
          rules={[
            {
              required: true,
              message: "Please input Album Name!",
            },{ whitespace:true },{
              min:2
            }
          ]}
          hasFeedback
        >
          <Input
            placeholder="album name"
            name="album_name"
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
          ]}hasFeedback
        >
          <Input
            placeholder="singer name"
            name="singer"
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
          ]}hasFeedback
        >
          <Input
            placeholder="composer name"
            name="composer_name"
            value={formData.composer_name}
            onChange={(e) => {
              setFormData({ ...formData, composer_name: e.target.value });
            }}
          />
        </Form.Item>

        {/* <Form.Item label="Launch Date">
          <DatePicker defaultValue={dayjs()} format={"DD/MM/YYYY"} />
          <input type="date" name="launch_date" onChange={getMusicDetail} />
        </Form.Item> */}

        <Form.Item
          label="Launch Date"
          name="launch_date"
          rules={[
            {
              required: true,
              message: "Please select launch date!",
            },
          ]}hasFeedback
          
          
        >
          <DatePicker
            picker="date"
            name="launch_date"
            value={formData.launch_date}
            onChange={(date,dateString)=>{
              setFormData({...formData,launch_date:dateString})
              // console.log(date)
            }}
            format={"YYYY-MM-DD"}
            placeholder="please select launch date"
          />
        </Form.Item>

        <Form.Item
          label="Place"
          name="place"
          rules={[
            {
              required: true,
              message: "Please input place!",
            },
          ]}hasFeedback
        >
          <Input
            placeholder="place name"
            name="place"
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
          ]}hasFeedback
        >
          {/* <select name="genre" onChange={getMusicDetail}>
            <option value="sad">sad</option>
            <option value="pop">pop</option>
            <option value="jazz">jazz</option>
          </select> */}

          <Select
            name="genre"
            onChange={(value)=>setFormData({...formData,genre:value})}
            value={formData.genre}
            placeholder="select genre"
          >
            <Select.Option value="sad"> SAD</Select.Option>
            <Select.Option value="pop"> POP</Select.Option>
            <Select.Option value="jazz"> JAZZ</Select.Option>
            <Select.Option value="party"> PARTY</Select.Option>

            {/* {formData.genre.map((g, index) => (
              <Select.Option key={index} value={g}>
                {g}
              </Select.Option>
            ))} */}
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
          ]}hasFeedback
        >
          <Input
            placeholder="reacord label"
            name="record_label"
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
          ]}hasFeedback
        >
          <Input
            placeholder="total track"
            name="total_track"
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
              message:'select an duration of your music cds'
            },
          ]}
          hasFeedback
          
        >
          <TimePicker
            name='duration'
            value={formData.duration}
            onChange={(time,timeString)=>{
              setFormData({...formData,duration:timeString})
              console.log(timeString)
            }}
          />
          {/* <input type="time" name="duration" onChange={getMusicDetail} /> */}
        </Form.Item>

        <Form.Item label="Format" name="format" 
        rules={[
          {required:true,
          message:'select an format'}
        ]}hasFeedback
        >
          <Select
            onChange={(value)=>{
              setFormData({...formData,format:value})
            }}
            value={formData.format}
            placeholder="select music format"
            name="format"
          >
            <Select.Option value="wav">WAV</Select.Option>
            <Select.Option value="mp4">MP4</Select.Option>
            <Select.Option value="aiff">AIFF</Select.Option>
            <Select.Option value="mp3">MP3</Select.Option>
            <Select.Option value="wma">WMA</Select.Option>
          </Select>

          {/* <select name="format" onChange={getMusicDetail}>
            <option value=".mp4">.mp4</option>
            <option value=".aiff">.aiff</option>
          </select> */}
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price",
            },
          ]}hasFeedback
        >
          <InputNumber min={1} name="price" 
          value={formData.price}
          onChange={(value)=>{
            setFormData({...formData,price:value})
          }} />
          {/* <input type="number" name="price" onChange={getMusicDetail} /> */}
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
