import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import UseStateDemo from './Hook/UseStateDemo/UseStateDemo';
import UseEffectDemo from './Hook/UseEffectDemo/UseEffectDemo';
import CommentApp from './Hook/CommentApp/CommentApp';
import AxiosClassComp from './AxiosDemo/AxiosClassComp';
import AxiosFunctionComp from './AxiosDemo/AxiosFunctionComp';
import AxiosMiddleware from './AxiosDemo/AxiosMiddleware';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import HOC from './HOC/HOC';
import { HomeTemplate } from './template/HomeTemplate';
import { UserTemplate } from './template/UserTemplate';
import AntdDemo from './pages/AntdDemo/AntdDemo';

import 'antd/dist/antd.css';
import { AdminTemplate } from './template/AdminTemplate';

// thu vien giup chuyen huong trang o bat ky file code
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
export const history = createBrowserHistory();

function App() {
  return (
    // BrowserRouter
    <Router history={history} >
      <div className="App container">


        <Switch>
          {/* <Route exact path="/home" render={(propsRoute) => {
            //propsRoute: props của Route giúp sử dung: history, match...
            return <div>
              <Header />
              <Home {...propsRoute}/>
            </div>
          }} />

          <Route exact path="/about" render={(propsRoute) => {
            return <div>
              <Header />
              <About  {...propsRoute}/>
            </div>
          }} /> */}

          <HomeTemplate path="/home" component={Home} />
          <HomeTemplate path="/about" component={About} />

          <UserTemplate path="/login" component={Login} />
          <UserTemplate path="/register" component={Register} />
          
          <AdminTemplate path="/antd" component={AntdDemo} />
          
          <Route exact path="/usestate" component={UseStateDemo} />
          <Route exact path="/useeffect" component={UseEffectDemo} />
          <Route exact path="/commentapp" component={CommentApp} />
          <Route exact path="/axiosrcc" component={AxiosClassComp} />
          <Route exact path="/axiosrfc" component={AxiosFunctionComp} />
          <Route exact path="/axiosware" component={AxiosMiddleware} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/hoc" component={HOC} />
        





          <Route exact path="/" component={AxiosMiddleware} />
        
        </Switch>


      </div>
    </Router>
  );
}

export default App;
