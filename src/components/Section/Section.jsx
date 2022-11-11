import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './Section.style';

export const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
