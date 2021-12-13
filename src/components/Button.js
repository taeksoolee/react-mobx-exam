import { observer } from 'mobx-react';
import React from 'react';
import { counter } from '../store';

@observer
class Button extends React.Component {
  handleClick() {
    counter.increase();
  }

  render() {
    return (
      <button onClick={this.handleClick}>my button</button>
    )
  }
}

export default Button;