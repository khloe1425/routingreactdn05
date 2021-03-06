import { useFormik } from 'formik'
import React from 'react'
import { GROUP_ID } from '../../ulti/setting'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { dangKy } from '../../redux/action/QuanLyNguoiDungAction';

export default function Register(props) {

  let dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt:'',
      maNhom:GROUP_ID,
      hoTen:''
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required('Tai khoan khong duoc de trong').min(3,'Tai khoan phai 3-6 ky tu').max(6,'Tai khoan phai 3-6 ky tu'),
      matKhau: Yup.string().required('Mat khau khong duoc de trong').min(6,'Mat khau phai 6-12 ky tu').max(12,'Mat khau phai 6-12 ky tu'),
      email:Yup.string().required('Email khong duoc de trong').email('Email khong dung dinh dang'),
      hoTen:Yup.string().required('Ho ten khong duoc de trong').matches(/^[A-Z a-z]+$/,"Ten phai la ky tu chu")
    }),
    onSubmit: (values) => {
        console.log({values})

        let action = dangKy(values);
        dispatch(action)

    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label >Tai khoan</label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur}  type="text" name='taiKhoan' className="form-control" />

          {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
         <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
       ) : null}

        </div>
        <div className="form-group">
          <label >Mat khau</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name='matKhau' className="form-control" />

          {formik.touched.matKhau && formik.errors.matKhau ? (
         <div className='alert alert-danger'>{formik.errors.matKhau}</div>
       ) : null}


        </div>
        <div className="form-group">
          <label >Email </label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name='email' className="form-control" />

          {formik.touched.email && formik.errors.email ? (
         <div className='alert alert-danger'>{formik.errors.email}</div>
       ) : null}




        </div>
        <div className="form-group">
          <label >Sdt </label>
          <input onChange={formik.handleChange} type="text" name='soDt' className="form-control" />
        </div>
        <div className="form-group">
          <label >Ho Ten </label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur}type="text" name='hoTen' className="form-control" />

          {formik.touched.hoTen && formik.errors.hoTen ? (
         <div className='alert alert-danger'>{formik.errors.hoTen}</div>
       ) : null}



          
        </div>
       

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
