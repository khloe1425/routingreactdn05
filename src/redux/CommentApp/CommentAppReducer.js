// rxr

//Khai báo state mặc định
// nhiều comment Obj => lưu trong mảng
const initialState = {
    arrComment:[
        {name:"yasuo", content:"Ahiihii", avatar:"https://i.pravatar.cc/300"},
        {name:"yasuo 2", content:"Ahiihii", avatar:"https://i.pravatar.cc/300"}
    ]
}

// { type, payload } => action

export const CommentAppReducer = (state = initialState, action) => {
  switch (action.type) {

  default:
    return state
  }
}
