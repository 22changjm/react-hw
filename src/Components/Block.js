import React from 'react';
import reactDom from 'react-dom';

class Block extends React.Component {
   
    //ADD CODE HERE
  constructor(props) {
    super(props);
  }
    
  render() {

  const mystyle = {
      // ADD CODE HERE
      backgroundColor: this.props.color
    };

  return (
    <>
      <div class = "blockers" style={
        mystyle
        }>
      </div>
      
      <div className="bottom">
          <div className="white"></div>
      </div>


    </>
      );
    }
  }


  export default Block;