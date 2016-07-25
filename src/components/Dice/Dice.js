import React from 'react';
import { Flex } from 'reflexbox';

import './Dice.css';
import { arrayOf } from '../../utils';

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
