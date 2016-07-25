import React, { Component } from 'react';
import { Flex } from 'reflexbox';

import Dice from './components/Dice/Dice';
import Dot from './components/Dot/Dot';
import { arrayOf } from './utils';
import './App.css';

class App extends Component {
  render() {
    return (
      <Flex
        className="App"
        justify="space-around"

        >

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
          <Flex align="flex-end">
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
            column={1}
            justify="space-between"
          >
            <Dot />
            <Dot />
          </Flex>
          <Flex
            align="flex-start"
            column={1}
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
            column={1}
            justify="space-between"
          >
            <Dot />
            <Dot />
          </Flex>
          <Flex
            align="center"
            column={1}
            justify="center"
          >
            <Dot />
          </Flex>
          <Flex
            align="flex-start"
            column={1}
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
            column={1}
            justify="space-between"
          >
            <Dot />
            <Dot />
            <Dot />
          </Flex>
          <Flex
            align="flex-start"
            column={1}
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
