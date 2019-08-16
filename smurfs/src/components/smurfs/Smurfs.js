import React, { Component } from 'react';
import { removeSmurf } from "../store/action";
import { connect } from 'react-redux';


class Smurfs extends Component {

  removeSmurf = (e, id) => {
    e.preventDefault();
    this.props.removeSmurf(id);
  }

  render(){
  return (
<div className='existing-smurf'>

    <header>
    <h2>{this.props.smurf.name}</h2>
    <button onClick={e => this.removeSmurf(e, this.props.smurf.id)}>Delete</button>
  </header>

  <div className="height">
    <h3>height:</h3>
    <p> {this.props.smurf.height} tall </p>
  </div>

  <div className="age">
    <h3>Age:</h3>
    <p>{this.props.smurf.age} smurf years old</p>
  </div>

</div>
)
}
}

export default connect(null, { removeSmurf })(Smurfs)