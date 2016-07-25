import React from 'react';
import { Flex } from 'reflexbox';

import './Dice.css';

const Dice = ({ children, ...rest }) => (
  <Flex
    className="Dice"
    p={2}
    {...rest}
  >
    {children}
  </Flex>
);

export default Dice;
