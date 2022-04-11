import Header from "../components/Header/Header"
import { Route } from "react-router-dom"
import { Fragment } from "react"


export const HomeTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        // Fragment: gần giống div nhưng sẽ không hiển thị trên html khi chạy ứng dựng
        return <Fragment>
            <Header />
            <props.component {...propsRoute} />
        </Fragment>
    }} />
}