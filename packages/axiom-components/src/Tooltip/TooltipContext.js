import React, { Component } from 'react';
import Context from '../Context/Context';

export default class TooltipContext extends Component {
  render() {
    return (
      <Context { ...this.props } />
    );
  }
}
