import React, {Component} from 'react'

// function Greeting (){
//     return(
//         <div>
//             <h1>Hello Son</h1>
//         </div>
//     )
// }

class Greeting extends Component {
state={
    username: "Omega Son"
}
render(){
return(
<div>
<h1>Hello {this.state.username}</h1>
</div>
)
}

}
export default Greeting;