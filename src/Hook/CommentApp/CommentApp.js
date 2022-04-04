import React,{useState} from 'react'
import {connect,useSelector,useDispatch } from 'react-redux'
import { ADD_COMMENT } from '../../redux/type/CommentActionType'

import { addCommentAction } from '../../redux/action/CommentAction'

export default function CommentApp(props) {

    // C1: dùng tham số props và mapStateToProp
    // console.log(props.arrComment);

    // C2:
    //useSelector thay thế cho mapStateToProp
    //lấy reducer về component
    // const {arrComment} = useSelector( state => state.CommentAppReducer)
    const {arrComment} = useSelector((state) => { 
            return state.CommentAppReducer
     })
     console.log(arrComment);

     //Chứa các thông tin người dùng nhập từ form
     let [user,setUserComment] = useState({
        name:"",
        content:""
     })
     console.log(user);

     const dispatch = useDispatch();

    //  Hàm xử lý
     const renderComment = () => {
        return arrComment.map((userComment) => { 
                return <div className="row" key={userComment.name}>
                <div className="col-3">
                    <img className='img-fluid' src={userComment.avatar} alt="" />
                </div>
                <div className="col-9">
                    <h3>{userComment.name}</h3>
                    <p>{userComment.content}</p>
                </div>
            </div>
         })
     }
     const handleInput = (event) => {
       let {value,name} = event.target;
    //    console.log(value, name);
    // object literal
    //  [name]:value
            // setUserComment({
            //    [name]:value  //? => content:"fgdhsjgjh"
            // }); //! => chỉ lưu được 1 dữ liệu mới nhất
        // let newUserComment = {...user};
        // newUserComment[name] = value;
        // setUserComment(newUserComment);
        // spread operator
        setUserComment({
            ...user,
            [name]: value //? nếu chưa có thuộc tính thì tạo thuộc tính mơi, 
            //? nếu đã có thì gán giá trị mới cho thuộc tính đó
        });
           
     }

     const handleSubmit = () => {
         const action = addCommentAction(user);

         dispatch(action)
     }


    return (
        <div className='w-50'>
            <h2>Demo useSelect useDispatch</h2>
            <div className="appCommment bg-secondary">
                {renderComment()}
            </div>
            <div className="appForm">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input onChange={(event) => { 
                            handleInput(event);
                         }} name='name' type="text" className="form-control" id="exampleInputEmail1" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Comment</label>
                        <textarea onChange={(event) => { 
                            handleInput(event);
                         }}  name="content"  className="form-control" id="exampleInputPassword1" ></textarea>
                      
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => { 
                        handleSubmit();
                     }}>Submit</button>
                </form>

            </div>
        </div>
    )
}

// const mapStateToProp = (rootReducer) => { 
//     return {
//         arrComment: rootReducer.CommentAppReducer.arrComment
//     }
//  }

// export default connect(mapStateToProp)(CommentApp);