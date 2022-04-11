import React from 'react'
import ModalComponent from './ModalComponent'
import { useState } from 'react'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import { useDispatch } from 'react-redux'

export default function HOC() {
    //props: string, number,array, object, function, component

    // let [component,setComponent] = useState(<Login />)
    let dispatch = useDispatch();
  return (
    <div>
        <button  data-toggle="modal" data-target="#exampleModal" className='btn btn-success' onClick={() => { 
            // setComponent(<Login />);
            dispatch({
                type:"OPEN_MODAL",
                Component: <Login />,
                handleForm: ()=>{
                    alert("Xử lý khi mở form Login");
                }
            })

         }} >Login</button>
        <button data-toggle="modal" data-target="#exampleModal" className='btn btn-success'  onClick={() => { 
            // setComponent(<Register />);
         }}>Register</button>
        {/* <ModalComponent component={<div>ahiihihi</div>} /> */}
        {/* <ModalComponent component={component} /> */}

        <ModalComponent/> 
    </div>
  )
}
