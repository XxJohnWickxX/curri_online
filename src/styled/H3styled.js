import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h2`
    font-weight: 400;;
    margin: .5em 0;
    color: #212121;
`;

const H3styled = ({ children }) => <StyledH3>{children}</StyledH3>;

export default H3styled;