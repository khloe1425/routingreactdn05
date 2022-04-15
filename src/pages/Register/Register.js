import { useFormik } from 'formik'
import React from 'react'
import { GROUP_ID } from '../../ulti/setting'


export default function Register(props) {

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt:'',
      maNhom:GROUP_ID,
      hoTen:''
    },
    onSubmit: (values) => {
        console.log({values})
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label >Tai khoan</label>
          <input onChange={formik.handleChange}  type="text" name='taiKhoan' className="form-control" />
        </div>
        <div className="form-group">
          <label >Mat khau</label>
          <input onChange={formik.handleChange} type="password" name='matKhau' className="form-control" />
        </div>
        <div className="form-group">
          <label >Email </label>
          <input onChange={formik.handleChange} type="text" name='email' className="form-control" />
        </div>
        <div className="form-group">
          <label >Sdt </label>
          <input onChange={formik.handleChange} type="text" name='soDt' className="form-control" />
        </div>
        <div className="form-group">
          <label >Ho Ten </label>
          <input onChange={formik.handleChange} type="text" name='hoTen' className="form-control" />
        </div>
       

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
