import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter:0
        }
    } 
    myCounter(){
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div>
                <p>Counter Is at : {this.state.counter}</p>
                <button onClick={()=>this.myCounter()}>Click me to count upwards Now</button>
            </div>
        )
    }
}

export default Counter
