import { Button, Col, Row } from "antd";
import { Link, useParams } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SellerMusic } from "../redux/MusicCds/MusicCdsSlice";

function SellerProfile() {
  const {id}=useParams();
  const dispatch=useDispatch();
  useEffect(()=>{
  console.log(id);
  dispatch(SellerMusic(id))
  },[])
 
 
  return (
    <>
      <Row>
        <Col span={24} style={{margin:'20px'}}>
          <Button type="primary" icon={<PlusOutlined />} size={"small"}>
            <Link to="/addMusic">Add Music Cds</Link>
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default SellerProfile;
