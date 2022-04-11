import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Profile(props) {
    

    if(!localStorage.getItem("access-token")){
        //chưa đăng nhập
        alert('Đăng nhập để sửa profile')
        return <Redirect to="/Login" />
    }

  return (
    <div>Profile</div>
  )
}
