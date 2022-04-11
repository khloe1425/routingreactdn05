import {applyMiddleware ,combineReducers,createStore } from "redux";
import {CommentAppReducer} from "./CommentApp/CommentAppReducer"
import { PhimReducer } from "./PhimReducer/PhimReducer";
import thunk from "redux-thunk";
import { ModalReducer } from "./ModalReducer/ModalReducer";

const rootReducer = combineReducers({
    //Khai báo state (reducer)
    //CommentAppReducer: CommentAppReducer
    CommentAppReducer,
    PhimReducer,
    ModalReducer
});

export const store =  createStore(rootReducer,applyMiddleware(thunk))