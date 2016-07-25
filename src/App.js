import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

import Dice from './components/Dice/Dice';
import Dot from './components/Dot/Dot';
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
        <Box>
          <h1>Roll the react dice</h1>
          <p>size: {size}</p>
        </Box>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input ref="size" type="number" max={4} />
        </form>

        {/* 1 */}
        <Dice
          align="center"
          justify="center"
          >
          <Dot />
        </Dice>

        {/* 2 */}
        <Dice
          justify="space-between"
          >
          <Flex
            align="flex-start"
            justify="space-between"
          >
            <Dot />
          </Flex>
          <Flex
            align="flex-end"
          >
            <Dot />
          </Flex>
        </Dice>

        {/* 3 */}
        <Dice
          justify="space-between"
          >
          <Flex
            align="flex-end"
            justify="space-between"
          >
            <Dot />
          </Flex>
          <Flex align="center">
            <Dot />
          </Flex>
          <Flex align="flex-start">
            <Dot />
          </Flex>
        </Dice>

        {/* 4 */}
        <Dice
          justify="space-between"
          >
          <Flex
            align="flex-start"
            column={true}
            justify="space-between"
          >
            <Dot />
            <Dot />
          </Flex>
          <Flex
            align="flex-start"
            column={true}
            justify="space-between"
          >
            <Dot />
            <Dot />
          </Flex>
        </Dice>

        {/* 5 */}
        <Dice
          justify="space-between"
          >
          <Flex
            align="flex-start"
            column={true}
            justify="space-between"
          >
            <Dot />
            <Dot />
          </Flex>
          <Flex
            align="center"
            column={true}
            justify="center"
          >
            <Dot />
          </Flex>
          <Flex
            align="flex-start"
            column={true}
            justify="space-between"
          >
            <Dot />
            <Dot />
          </Flex>
        </Dice>

        {/* 6 */}
        <Dice
          justify="space-between"
          >
          <Flex
            align="flex-start"
            column={true}
            justify="space-between"
          >
            <Dot />
            <Dot />
            <Dot />
          </Flex>
          <Flex
            align="flex-start"
            column={true}
            justify="space-between"
          >
            <Dot />
            <Dot />
            <Dot />
          </Flex>
        </Dice>

      </Flex>
    );
  }
}

export default App;
