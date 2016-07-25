import React from 'react';
import { Flex } from 'reflexbox';

import './Dice.css';
import { arrayOf } from '../../utils';

const Dice = ({ children }) => (
  <Flex className="Dice" p={2}>{children}</Flex>
);

export default Dice;
