import React from "react";
const Greet1 =(props)=>{
    console.log(props)
    return (
    <div><h2>Hello {props.name} aka {props.heroName}</h2>
    {props.children}</div>
    )
}
export default Greet1