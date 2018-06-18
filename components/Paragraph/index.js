import React, { Component } from 'react';

class Paragraph extends Component {

  state = {
    backgroundColor: this.props.styles.backgroundColor
  };

  onColorChange = () => {
    const backgroundColor = this.state.backgroundColor === 'olive'? 'orange' : 'olive';
    this.setState({backgroundColor});
  }

  render(){

   const { styles, body } = this.props;
   const { backgroundColor } = this.state;
   console.log(backgroundColor);

   return (
     <p style={{...styles, backgroundColor : backgroundColor}}
        onClick={this.onColorChange}
       >
       {body}
     </p>
   );
  }
}

export default Paragraph;
