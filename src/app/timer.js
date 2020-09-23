import React from 'react';
import '../style/components.css'
import TimerDetail from '../components/timerDetail'
import { Link } from 'react-router-dom';


const Timer = () => {
  return (<div className="Timer">
   <h1>在线倒计时器</h1>
    <TimerDetail />
    <Link className='BackHomeLink2' to='/'>返回首页</Link>
  </div>);
};

export default Timer;