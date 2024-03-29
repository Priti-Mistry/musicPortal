import { Col, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {  allMusic } from "../redux/MusicCds/MusicCdsSlice";
import Search from "antd/es/input/Search";
import './style.css'
function AllMusicList() {
  const dispatch=useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  useEffect(()=>{
    dispatch(allMusic());
    if (searchQuery === "") {
      setFilteredData(null);
    } else {
      handleSearch(searchQuery);
    }
  },[searchQuery])
  const columns = [
    {
      title: 'Album',
      width: 100,
      dataIndex: 'album_name',
      key: 'album_name',
      fixed: 'left',
    },
    {
      title: 'Singer',
      width: 100,
      dataIndex: 'singer',
      key: 'singer',
      fixed: 'left',
    },
    {
      title: 'Composer',
      dataIndex: 'composer_name',
      key: 'composer_name',
      width: 150,
    },
    {
      title: 'Launch Date',
      dataIndex: 'launch_date',
      key: 'launch_date',
      width: 150,
    },
    {
      title: 'Place',
      dataIndex: 'place',
      key: 'place',
      width: 150,
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
      width: 150,
    },
    {
      title: 'Record Label',
      dataIndex: 'record_label',
      key: 'record_label',
      width: 150,
    },
    {
      title: 'Total Tracks',
      dataIndex: 'total_track',
      key: 'total_track',
      width: 150,
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      width: 150,
    },
    {
      title: 'Music CD format',
      dataIndex: 'format',
      key: 'format',
      width: 200,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 150,
    },
    {
      title: 'Seller Name',
      dataIndex: 'seller_name',
      key: 'seller_name',
      width: 150,
    },
  ];
  // Function to handle search
  const handleSearch = (value) => {
    setSearchQuery(value);

    // Filter the data based on the search query
    const filtered = data.filter(
      (item) =>
        item.album_name.toLowerCase().includes(value.toLowerCase()) ||
        item.singer.toLowerCase().includes(value.toLowerCase()) ||
        item.composer_name.toLowerCase().includes(value.toLowerCase()) ||
        item.place.toLowerCase().includes(value.toLowerCase()) ||
        item.genre.toLowerCase().includes(value.toLowerCase()) ||
        item.record_label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  
  const Details = useSelector((state)=>state.musicCd.musicCdsDetail) ;
  const Seller = useSelector((state)=>state.musicCd.seller)

  const data =Array.isArray(Details) && Details.map((musicCd)=>{
          return {
        key:musicCd.musicCd_id,
        album_name:musicCd.album_name,
        singer:musicCd.singer,
        composer_name:musicCd.composer_name,
        launch_date:musicCd.launch_date.split("T")[0],
        place:musicCd.place,
        genre:musicCd.genre,
        record_label:musicCd.record_label,
        total_track:musicCd.total_track,
        duration:musicCd.duration,
        format:musicCd.format,
        price:musicCd.price,
        // UserId:musicCd.UserId,
        seller_name:Seller.map((seller)=>
            (musicCd.UserId === seller.id)?seller.username:""
        )
        
      }

  });
 return (
    <>
    <div className="container">
      <Col>
      <Search className="search"
            placeholder="Search by album name, artist, composer, etc."
            allowClear
            enterButton="Search"
            size="large"
            onSearch={handleSearch}
          />
      </Col>
    
    <Table
    className="music-data"
      columns={columns}
      dataSource={filteredData || data}
      
    />
    </div>
    </>
)}

export default AllMusicList;
