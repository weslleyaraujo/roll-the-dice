import React, { Component } from 'react';
import { Flex } from 'reflexbox';

import Dice from './components/Dice/Dice';
import Dot from './components/Dot/Dot';
import { arrayOf } from './utils';
import './App.css';

class App extends Component {
  render() {
    return (
      <Flex className="App">
        {arrayOf(6).map(x => <Dice key={x}>{arrayOf(x).map(y => <Dot key={y} />)}</Dice>)}
      </Flex>
    );
  }
}

export default App;
