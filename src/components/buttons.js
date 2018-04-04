import React, { Component } from 'react';
import {ButtonsPanel} from './buttonsPanel';

export class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null
    };
  }

  render() {
    return (
      <div>

        //equal button functionality
        <buttonsPanel total={this.state.total} />
      </div>
    );
  }
}
