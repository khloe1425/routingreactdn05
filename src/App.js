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

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
          <Header/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/usestate" component={UseStateDemo} />
          <Route exact path="/useeffect" component={UseEffectDemo} />
          <Route exact path="/commentapp" component={CommentApp} />
          <Route exact path="/axiosrcc" component={AxiosClassComp} />
          <Route exact path="/axiosrfc" component={AxiosFunctionComp} />
        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;
