import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch, Link, NavLink} from "react-router-dom";
import Home from "./Home";
import Calculator from './Calculator';
import '../style/components.css';
import Timer from './timer';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul className='head'>
        <li className='timerli'>
            <NavLink 
              className='links'
              exact
              to='/timer'
              activeClassName = 'links1'
               >在线倒计时器</NavLink>
          </li>
          <li>
            <NavLink 
              className='links'
              exact
              to='/calculator'
              activeClassName = 'links1'
               >在线计算器</NavLink>
          </li>            
          <li>
            <NavLink 
              className='links'
              exact
              to='/'
              activeClassName = 'links1'
               >HOME</NavLink>
          </li>   
        </ul>        
        <div className="app">      
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/calculator' component={Calculator} />
            <Route path='/timer' component={Timer} />
          </Switch>        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
