import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button(props => ({
    color: props.theme.color,
    backgroundColor: 'white',
    padding: '1rem 2rem',
    borderRadius: '1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'all 250ms ease-in-out',
    border: '1px solid black',

    '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 0.4rem 0.5rem hsl(220, 100%, 15%)',
        color: 'white',
        backgroundColor: 'hsl(210, 5%, 42%)',
    },
    '&:active': {
        transform: 'translateY(-1px)',
        boxShadow: '0 0.2rem 0.3rem hsl(220, 100%, 15%)',
    }
}))

export const Button = () => {
    return (
        <StyledButton>
            Button
        </StyledButton>
    )
}
