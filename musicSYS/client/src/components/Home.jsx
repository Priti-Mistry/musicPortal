import { Col, Row , Button} from 'antd';
import {PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import AllMusicList from './AllMusicList';

function Home() {
  return (
    <>
    {/* <Row>
      <Button type="primary" icon={<PlusOutlined />} size={'small'} style={{margin:'20px'}}>
            <Link 
              to="addMusic"
            >Add</Link>
      </Button>
      </Row> */}
      <Row>
      <Col span={24}>
      <AllMusicList/>
      </Col>
      </Row>
    </>
  )
}

export default Home