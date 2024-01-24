import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
// import Highlighter from "react-highlight-words";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SellerMusic, allMusic } from "../redux/MusicCds/MusicCdsSlice";
import { useParams } from "react-router-dom";

function AllMusicList() {
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(allMusic());
    // dispatch(SellerMusic(id));
  },[])
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
      dataIndex: 'UserId',
      key: 'UserId',
      width: 150,
    },
    // {
    //   title: 'Action',
    //   key: 'operation',
    //   fixed: 'right',
    //   width: 100,
    //   render: () => <a>action</a>,
    // },
  ];
  
  const Details = useSelector((state)=>state.musicCd.musicCdsDetail) ;
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
      UserId:musicCd.UserId,
      // update:<Button type="text" onClick={()=>updatemusicCdHandler(musicCd.id)}><FormOutlined className="update-icon"/></Button>,
      // delete:<Button type="text" onClick={()=>deletemusicCdHandler(musicCd.id)}><DeleteOutlined className="delete-icon"/></Button>
    }
  });

  // for (let i = 0; i < 10; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edward ${i}`,
  //     age: 32,
  //     address: `London Park no. ${i}`,
  //   });
  // }
 return (
    <>
    <Table
      columns={columns}
      dataSource={data}
      
    /></>
)}

export default AllMusicList;
