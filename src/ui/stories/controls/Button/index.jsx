import React from 'react';
import styled from 'styled-components'
import breakpoints from '../../breakpoints';

const StyledButton = styled.button`
    background: ${({theme, primary}) => primary ? theme.colors.primary: theme.colors.secondary};
    height: 44px;
    border-radius: 22px;    
    padding-left: 22px;    
    padding-right: 22px;
    color: ${({theme, primary}) => primary ? theme.colors.secondary: theme.colors.primary};
    box-shadow: inset 0 0 0 1px #005dad;
    font-size: ${({theme}) => theme.fontSizes.small};
    cursor: pointer;
    font-weight: 400;
    border: none;
    @media only screen and ${breakpoints.device.sm} {
        width: 100%;
        box-sizing: border-box;
    }
;
`

export const Button = ({label, ...restProps}) => {
    return (<StyledButton {...restProps}>
        {label}
    </StyledButton>)
}
