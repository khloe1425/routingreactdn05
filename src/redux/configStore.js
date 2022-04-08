import {applyMiddleware ,combineReducers,createStore } from "redux";
import {CommentAppReducer} from "./CommentApp/CommentAppReducer"
import { PhimReducer } from "./PhimReducer/PhimReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    //Khai báo state (reducer)
    //CommentAppReducer: CommentAppReducer
    CommentAppReducer,
    PhimReducer
});

export const store =  createStore(rootReducer,applyMiddleware(thunk))