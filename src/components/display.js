import React, { Component } from 'react';
import {ButtonsPanel} from './buttonsPanel';
import calculation from '../calculations/calculations';
import './display.css';

export class Display extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  //ES5 regular function: does NOT auto-bind "this"
  changeDisplay(newValue){
    //test to see if the newValue(current button value) is a number OR '.' (decimal)
    if(/[0-9]/.test(newValue)) {
      //combines current state with current button value (i.e. 1 and 2 --> 12)
      this.setState({value: this.state.value.concat(newValue)})
      //clear when you click 'C'
    } else if (newValue === null) {
      this.setState({value: ''});
      //when you press any operator --> it will run the calculation function
    } else {
      this.setState(calculation(newValue, this.state.value));
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='screen'>
          <h1 id='input'>{this.state.value}</h1>
        </div>

        <div className='row'>
          <ButtonsPanel onClick={this.changeDisplay} />
        </div>
      </div>
    );
  }
}
