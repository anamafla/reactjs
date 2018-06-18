import React, { Component } from  'react';

class Title extends Component {

  state = {
    color: this.props.styles.color
  };

  onColorChange = () => {
    const color = this.state.color === 'red'? 'blue':'red';
    this.setState({color});
  }

  render(){
   const { styles, title } = this.props;
   const { color } = this.state;
   console.log(color);

   return (
     <h1 style={{...styles, color: color, fontSize: '60px'}}
         onClick={this.onColorChange}
       >
         {title}
       </h1>
   );
  }
}

export default Title;
