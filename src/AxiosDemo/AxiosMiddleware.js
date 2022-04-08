import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { TOKEN_MOVIE } from '../ulti/setting';
import { type } from '@testing-library/user-event/dist/type';
import { layDanhSachPhim } from '../redux/action/PhimAction';

export default function AxiosMiddleware() {

  let { mangPhim } = useSelector((state) => {
    return state.PhimReducer
  })

  let dispatch = useDispatch();

  useEffect(() => { 
    console.log("didmount")
      callAPI();
   },[]);


  console.log(mangPhim);
  const callAPI = () => {
    //lấy data từ API
    //đẩy (dispatch) data lên reducer 

    // action loại 1: {type, data}
    // action loại 2: function (call API) => cài middleware (redux-thunk), chỉ nhận vào 1 hàm chưa được gọi

    const actionFunc = layDanhSachPhim("GP02");
    //đẩy hàm lên Middleware
    dispatch(actionFunc);


    // let promise = axios({
    //   method: "get",
    //   url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
    //   headers: {
    //     "TokenCybersoft": TOKEN_MOVIE
    //   }
    // });
    // promise.then((result) => {
    //   //lấy data thành công
    //   // console.log(result.data.content);

    //   let action ={
    //     type:"LAY_DS_PHIM",
    //     mangPhim:result.data.content
    //   }
    //   dispatch(action);
    // });

    // promise.catch((error) => {
    //   console.log(error);
    // })


  }
  const renderPhim = () => {

  }

  return (
    <div className='container'>
      <button onClick={callAPI} className='btn btn-success' >Lay danh sach</button>
      <div className="row">
        {renderPhim()}
      </div>
    </div>
  )
}
