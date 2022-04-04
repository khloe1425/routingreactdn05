import React,{useState} from 'react'
import {connect,useSelector,useDispatch } from 'react-redux'


function CommentApp(props) {

    // C1: dùng tham số props và mapStateToProp
    console.log(props.arrComment);

    // C2:
    //useSelector thay thế cho mapStateToProp
    //lấy reducer về component
    const {arrComment} = useSelector((state) => { 
            return state.CommentAppReducer
     })
     console.log(arrComment);

    return (
        <div className='w-50'>
            <h2>Demo useSelect useDispatch</h2>
            <div className="appCommment bg-secondary">
                <div className="row">
                    <div className="col-3">
                        <img className='img-fluid' src="https://i.pravatar.cc/300" alt="" />
                    </div>
                    <div className="col-9">
                        <h3>yasuo</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="appForm">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Comment</label>
                        <textarea className="form-control" id="exampleInputPassword1" ></textarea>
                      
                    </div>
                    <button type="button" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}

const mapStateToProp = (rootReducer) => { 
    return {
        arrComment: rootReducer.CommentAppReducer.arrComment
    }
 }

export default connect(mapStateToProp)(CommentApp);