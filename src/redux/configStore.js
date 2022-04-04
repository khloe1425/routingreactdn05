import { combineReducers,createStore } from "redux";
import {CommentAppReducer} from "./CommentApp/CommentAppReducer"


const rootReducer = combineReducers({
    //Khai báo state (reducer)
    //CommentAppReducer: CommentAppReducer
    CommentAppReducer
});

export const store =  createStore(rootReducer)