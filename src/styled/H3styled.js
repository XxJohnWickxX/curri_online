import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 1em 0 0 0;
    color: #FF9445;
`;

const H2styled = ({ children }) => <StyledH2>{ children }</StyledH2>;

export default H2styled;