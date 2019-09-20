import React from 'react';
import styled from 'styled-components';

const StyledP= styled.h2`
    color: #757575;
    font-weight: 300;
    margin: .5em 0 1.2em 0;
`;

const Pstyled = ({ children }) => <StyledP>{children}</StyledP>;

export default Pstyled;