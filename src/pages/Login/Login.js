import React, { useState } from 'react';


export default function Login(props) {

  console.log(props)
  let [user,setUserAccount] = useState({});
  console.log(user)
  const hanleInput = (event) => {
      let {value,name} = event.target;

      setUserAccount({
        ...user,
        [name]:value
      })
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      if(user.username ==="cyber"){
          //đăng thành công
          props.history.push("/home");
      }else{

        alert("Tài khoản không đúng")
      }
  }

  return (
    <div className='container'>
      <form onSubmit={(event) => { 
        handleSubmit(event)
       }} >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">UserName</label>
          <input onChange={(event) => { 
              hanleInput(event);
           }} name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange={(event) => { 
              hanleInput(event);
           }} name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
