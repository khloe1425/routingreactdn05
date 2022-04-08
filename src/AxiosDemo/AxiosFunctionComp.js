import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TOKEN_MOVIE } from '../ulti/setting';

export default function AxiosFunctionComp() {

  // khai bao gia tri default cho state
  let [mangPhim, setMangPhim] = useState([]);

  console.log(mangPhim);

  useEffect(() => {
    console.log("didmount")
    callAPI();

  }, []);

  const renderPhim = () => {
    //map duyet mangPhim
    return mangPhim.map((phim) => {
      return <div className="col-3" key={phim.maPhim}>
        <div className="card">
          <img src={phim.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{phim.tenPhim}</h5>
            <p className="card-text">{phim.moTa}</p>

          </div>
        </div>

      </div>
    })
  }

  const callAPI = async () => {
    try {
      let result = await axios({
        method: "get",
        url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        headers: {
          "TokenCybersoft": TOKEN_MOVIE
        }
      });

      await setMangPhim(result.data.content);
    } catch (error) {
      //khi bị lỗi 
        console.log(error)
    }

    // let promise = axios({
    //   method: "get",
    //   url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
    //   headers: {
    //     "TokenCybersoft": TOKEN_MOVIE
    //   }
    // });

    // promise.then((result) => { 
    //     //lấy data thành công
    //     // console.log(result.data.content);
    //     setMangPhim(result.data.content);
    //  });

    // promise.catch((error) => { 
    //   console.log(error);
    // })
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
