import React from 'react';
import '../App.css';
class Square extends React.Component {
 
  
  render() {
    let color = 'green'
    if(this.props.value === 'X')
          color = 'blue';
    if(this.props.value==='O')
        color = 'red'      
      return (
        <button  style={{backgroundColor:color}} className="square" onClick={() => this.props.onClick() } >
        {this.props.value}
        
        </button>
      );
    }
  }
export default Square  
  