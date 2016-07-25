import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

import { arrayOf, randRange } from './utils';
import * as Dices from './components/Dices/Dices';
import './App.css';

const initialState = {
  size: 0,
  dices: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case 'ROLL':
      const { keys, size } = payload;
      return {
        ...state,
        size,
        dices: arrayOf(size).map(x => keys[randRange(0, keys.length)]),
      }
    default:
      return state;
  }
}

class App extends Component {

  state = {
    ...initialState,
  }

  componentDidMount() {
    this.state = reducer(undefined, {});
  }

  onFormSubmit(event) {
    event.preventDefault();
    const size = this.refs.size.value;

    if(!size) {
      return;
    }

    this.setState(reducer(this.state, {
      type: 'ROLL',
      payload: {
        keys: Object.keys(Dices),
        size,
      },
    }));
  }

  renderDice(size) {
    switch(size) {
      case 'One': return <Dices.One key={size} />
      case 'Two': return <Dices.Two key={size} />
      case 'Three': return <Dices.Three key={size} />
      case 'Four': return <Dices.Four key={size} />
      case 'Five': return <Dices.Five key={size} />
      case 'Six': return <Dices.Six key={size} />
    }
  }

  render() {
    const { size, dices } = this.state;
    return (
      <Flex
        className="App"
        column={true}
        justify="space-around"
        >
        <Box
          className="App--content"
          p={1}>
          <h1>Roll the react dice</h1>
          <form onSubmit={this.onFormSubmit.bind(this)}>
            <select ref="size">
              {arrayOf(6).map(x => <option value={x}>{x} </option>)}
            </select>
            <button type="submit">Roll it</button>
          </form>
        </Box>
        <Box
          p={1}>
          {dices.map(x => this.renderDice(x))}
        </Box>
      </Flex>
    );
  }
}

export default App;
