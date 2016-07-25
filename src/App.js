import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
} from './components/Dices/Dices';
import './App.css';

const ui = (state = {
  size: 0,
}, { type, payload }) => {
  switch(type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        size: payload.size,
      }
    default:
      return state;
  }
}

const dices = (state = [], { type, payload }) => {
  switch(type) {
    default:
      return state;
  }
}

class App extends Component {
  state = {
    ui: ui(undefined, {}),
    dices: dices(undefined, {}),
  }

  onFormSubmit(event) {
    event.preventDefault();
    const size = this.refs.size.value;

    this.setState({
      ui: ui(this.state.ui, {
        type: 'CHANGE_VALUE',
        payload: {
          size,
        },
      }),
    });
  }

  render() {
    const { size } = this.state.ui;

    return (
      <Flex
        className="App"
        justify="space-around"

        >
        <Box
          p={1}>
          <h1>Roll the react dice</h1>
          <p>size: {size}</p>
        </Box>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input ref="size" type="number" max={4} />
        </form>
        <Box
          p={1}>
          <One />
          <Two />
          <Three />
          <Four />
          <Five />
          <Six />
        </Box>
      </Flex>
    );
  }
}

export default App;
