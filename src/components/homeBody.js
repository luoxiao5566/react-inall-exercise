import React from 'react';
import '../style/components.css'
import imgURL1 from '../images/calculator.png';
import imgURL2 from '../images/timer.png';
import { Link } from 'react-router-dom';
class HomeBody extends React.Component {
  render() {
    return (
      <div className='homeBody'>
        <div className='calculatorLog'>
            <img src={imgURL1} alt='Calculator'></img>
        </div>
        <div className='timerLog'>
            <img src={imgURL2} alt='timer'></img>
        </div>
        <ul className='linkUl'>
            <li>
                <Link className='linkcal' to='/calculator'>计算器</Link>        
            </li>
            <li>
                 <Link className='linktime' to='/timer'>倒计时器</Link>
            </li>
        </ul>
      </div>
    );
  }
}

export default HomeBody;