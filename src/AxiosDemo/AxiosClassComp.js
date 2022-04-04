import React, { Component } from 'react'
import axios from 'axios'
import { TOKEN_MOVIE } from '../ulti/setting'

export default class AxiosClassComp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mangPhim: []
    }
  }

  callAPI = () => {
    let promise = axios({
      method: 'get',
      url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
      headers: {
        "TokenCybersoft": TOKEN_MOVIE
      }
    });

    promise.then((result) => {
      //thanh cong
      console.log(result.data);
      console.log(result.data.content);
      this.setState({
        mangPhim: result.data.content
      })
    });

    promise.catch((error) => {
      console.log(error);
    })

  }

  renderMovie = () => {

    return this.state.mangPhim.map((movie) => {
      return <div className="col-3">
        <div className="card">
          <img src={movie.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.tenPhim}</h5>
            <p className="card-text">{movie.moTa}</p>
          
          </div>
        </div>

      </div>
    })

  }

  render() {
    
    return (
      <div className='container'>
        <button className='btn btn-success' onClick={this.callAPI}>Lay danh sach</button>
        <div className="row">
              {this.renderMovie()}
        </div>
      </div>
    )
  }

  componentDidMount(){
    this.callAPI();
  }



}
