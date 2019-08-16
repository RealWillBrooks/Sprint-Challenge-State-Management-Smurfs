import React from "react";
import { removeSmurf } from "../store/action";

function Smurfs(props) {
  return (
    <div className='existing-smurf'>
        <h3>Name: {props.smurf.name}</h3>
        <h4>{props.smurf.age} years old and {props.smurf.height}cm tall</h4>
        <button className='delete' onClick={removeSmurf}>Delete</button>
    </div>
  );
}
export default Smurfs