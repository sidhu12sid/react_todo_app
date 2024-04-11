import React, { Component } from 'react';

class Counter extends Component {
state = {
    counter: 0
};

onIncrement = () => {
    this.setState({
        counter: this.state.counter + 1
    })

}
onDecrement = () => {
    this.setState({
        counter: this.state.counter - 1
    })
}

    render() { 
        return ( 
        <div>
            <h1>Counter</h1>
            <h4>{this.state.counter}</h4>               
            <button onClick={this.onDecrement}>-</button> 
            <button onClick={this.onIncrement}>+</button>               
        </div> 
            );
    }
}
 
export default Counter;