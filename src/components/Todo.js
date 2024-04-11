import React, { Component } from 'react';

class Todo extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1> Todo Application using react js</h1>
                <p>{this.props.myString}</p>
            </div>
         );
    }
}
 
export default Todo;