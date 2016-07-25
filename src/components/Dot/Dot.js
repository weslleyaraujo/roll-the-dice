import React from 'react';
import { Box } from 'reflexbox';
import './Dot.css';

const Dot = ({ ...rest }) => (
  <Box className="Dot" { ...rest }></Box>
);

export default Dot;
