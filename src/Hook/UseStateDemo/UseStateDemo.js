import React, { useState } from 'react'

export default function UseStateDemo() {
  // click button Like => thì số like sẽ tăng

  //Class Component
  // lưu số like vào state 
  // gọi setState() gán giá trị mới cho state => render lại UI


  // useState() => có 2 phần tử của mảng [phần tử 1, phần tử 2]
  //useState(): thay thế cho state và setState trong function component
  //[phần tử 1, phần tử 2] => [giá trị của state, hàm dùng để set lại state và render lại UI]
  //Destructoring 
  // state ={
  //     like:0,
  //     number:0
  //   }

  // let [like,setLike] = useState({like:0});
  // let [state, setState] = useState({ like: 0, number:0, user:{  username:"",passowrd:""}});


  // Khi có nhiều giá trị cần lưu trong state thì nên tách thành nhiều useState
  // let [state, setState] = useState({ like: 0 });
  // let [user, setUser] = useState({
  //   username:"",
  //   passowrd:""
  // });

  let [like, setState] = useState(0);
  
  let [imgCar, setImg] = useState('./img/CarBasic/products/black-car.jpg');
  //sau khi dùng useState:  imgCar = './img/CarBasic/products/black-car.jpg'

  let changeColor = (color) => {
      setImg(`./img/CarBasic/products/${color}-car.jpg`);
  }

  return (
    <div>
      <h2>Demo UseState</h2>
      <div className="card mt-5 w-25">
        <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
        <div className="card-body">
          {/* <h5 className="card-title">Like <span>{state.like}</span> </h5> */}
          <h5 className="card-title">Like <span>{like}</span> </h5>
          <button className='btn btn-danger' onClick={() => {
            // setState({
            //   like: state.like + 1
            // })
            setState(like + 1)

          }} >Like</button>

        </div>
      </div>

      <h2>Demo đổi màu xe</h2>
      <div className="row">
        <div className="col-9">
          <img className='img-fluid' src={imgCar} alt="" />
        </div>
        <div className="col-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <button className="btn btn-dark" onClick={() => { 
                  // setImg('./img/CarBasic/products/black-car.jpg');

                  changeColor('black');


               }}>Black</button>
            </li>
            <li className="nav-item mt-5">
              <button className="btn btn-danger" onClick={() => { 
                  // setImg('./img/CarBasic/products/red-car.jpg')

                  changeColor('red');


               }}>Red</button>
            </li>
            <li className="nav-item mt-5">
              <button className="btn btn-light" href="#">silver</button>
            </li>
            <li className="nav-item mt-5">
              <button className="btn btn-secondary" href="#">steel</button>
            </li>
          
          </ul>

        </div>
      </div>
    </div>

  )
}
