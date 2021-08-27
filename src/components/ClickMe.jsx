import React, {Component} from 'react'
class ClickMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Button has been clicked" 
        }
        this.omegaSon =this.omegaSon.bind(this)
    }
    omegaSon(){
        alert(this.state.message)
    }
    render(){
        return(
        <div>
            {/* <button onClick={()=>this.omegaSon()}>Click Me</button> */}
            <button onClick={this.omegaSon}>Click Me</button>
        </div>
        )
    }
}
export default ClickMe;