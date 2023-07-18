import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return (
        <div>
            <h1>Class Component</h1>
            <p>Name {this.props.name} aka {this.props.heroName}</p>
        </div>
        )
    }
}
export default  Welcome//exporting the class component as a named module.