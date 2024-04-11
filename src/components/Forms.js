import React, { Component } from 'react';

class Forms extends Component {
    state = { 
        value: null
     } 

    handleOnChange = (event) =>{
       this.setState({
        value : event.target.value
       })
    }

    render() { 
        return (
            <form>
                <h3>Form component</h3>
                <input type="text" onChange={this.handleOnChange}/>
                <p>{this.state.value}</p>
            </form>
        );
    }
}
 
export default Forms;