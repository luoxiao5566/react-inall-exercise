import React from 'react';
import '../style/components.css'

class Buttons extends React.Component {
  render() {
    return (
      <div className='buttons'>
        <label>
           Name
           <input 
              className='result'
              type='text' 
              name='result'               
            />
        </label>
        <div>
            <button className='add'>+</button>
            <button className='sub'>-</button>
            <button className='mul'>*</button>
        </div>
        <div>
            <button className='Seven'>7</button>
            <button className='Eight'>8</button>
            <button className='Nine'>9</button>
        </div>
        <div>
            <button className='Four'>4</button>
            <button className='Five'>5</button>
            <button className='Six'>6</button>
        </div>
        <div>
            <button className='One'>1</button>
            <button className='Two'>2</button>
            <button className='Three'>3</button>
        </div> 
        <div>
            <button className='Zero'>0</button>
            <button className='eliminate'>Clear</button>
            <button className='ans'>=</button>
        </div>        
      </div>
    );
  }
}

export default Buttons;