import React from 'react';
import { Box, Flex } from 'reflexbox';

import Dice from '../Dice/Dice';
import Dot from '../Dot/Dot';

const One = () => (
  <Dice
    align="center"
    justify="center"
  >
    <Dot />
  </Dice>
);

const Two = () => (
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
);

const Three = () => (
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
);

const Four = () => (
  <Dice
    justify="space-between"
    >
    {[1, 2].map(x => (
      <Flex
        key={x}
        align="flex-start"
        column={true}
        justify="space-between"
      >
        <Dot />
        <Dot />
      </Flex>
    ))}
  </Dice>
);

const Five = () => (
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
);

const Six = () => (
  <Dice
    justify="space-between"
    >
    {[1, 2].map(x => (
      <Flex
        key={x}
        align="flex-start"
        column={true}
        justify="space-between"
      >
        <Dot />
        <Dot />
        <Dot />
      </Flex>
    ))}
  </Dice>
);

export {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
};
