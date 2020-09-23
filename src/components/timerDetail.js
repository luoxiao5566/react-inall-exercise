import React from 'react';
import '../style/components.css'

class TimerDetail extends React.Component {
    state = {
        setTime:50,  
        countdown:50        
      }


    handleChange = (event) => {       
        this.setState({
          [event.target.name]:event.target.value
        })    
      }

  render() {
    return (
      <div className='TimerDetail'>        
        <label>
           设置时间
           <input 
              className='setTime'
              type='text' 
              name='setTime'    
              onChange={this.handleChange}
              value={this.state.setTime}           
            />
        </label>
        <div>
            <button className='Start'>Start</button>
        </div>
        <div>
            <span className='Countdown'>{this.state.countdown}</span>
        </div>

               
      </div>
    );
  }
}

export default TimerDetail;