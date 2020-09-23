import React from 'react';
import '../style/components.css'
import Burrons from '../components/buttons';
import { Link } from 'react-router-dom';

const Calculator = () => {
  return (<div className="Calculator">
    <h1>在线计算机</h1>
    <Burrons />
    <Link className='BackHomeLink' to='/'>返回首页</Link>
    
  </div>);
};

export default Calculator;