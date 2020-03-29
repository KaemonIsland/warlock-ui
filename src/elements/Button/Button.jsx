import React from 'react'
import styled, { keyframes, css, withTheme } from 'styled-components'
import PropTypes from 'prop-types'

const topBubbles = keyframes`
  0%{
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
  }
`
const bottomBubbles = keyframes`
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
  }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
  }
`

const topAnimation = css`
  ${topBubbles} ease-in-out 0.75s forwards
`

const bottomAnimation = css`
  ${bottomBubbles} ease-in-out 0.75s forwards;
`

const StyledButton = styled.button`
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => (border ? border : 'none')};
  color: ${({ color }) => (color ? color : 'black')};
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  font-family: roboto, sans-serif;
  line-height: ${({ theme }) => theme.spaceScale(5)};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontScale(2)};
  text-transform: uppercase;
  padding: ${({ paddingSize }) => paddingSize};
  transition: all 200ms;
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
  outline: none;

  &:hover, &:focus {
    background-color: ${({ focusBackground }) => focusBackground};
    transform: ${({ isDisabled, hover }) =>
      !isDisabled && hover ? 'translateY(-0.3rem)' : ''};
    box-shadow: ${({ theme, hover }) => hover && theme.boxShadow.single[2]};
  }

  &:active {
    transform: ${({ isDisabled, hover }) =>
      !isDisabled && hover ? 'translateY(-0.1rem)' : ''};
    box-shadow: ${({ theme, hover }) => hover && theme.boxShadow.single[1]};
  }

  &:before, &:after {
    position: absolute;
    content: '';
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }
  &:before {
    animation: ${({ animate }) => (animate ? topAnimation : '')};
    display: ${({ animate }) => (animate ? 'block' : 'none')};
    top: -75%;
    background-image: 
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%),
      radial-gradient(circle,  transparent 20%, ${({
        bubbleColor,
        bubble,
        isDisabled,
      }) => !isDisabled && bubble && bubbleColor} 20%, transparent 30%),
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%),
      radial-gradient(circle,  transparent 10%, ${({
        bubbleColor,
        bubble,
        isDisabled,
      }) => !isDisabled && bubble && bubbleColor} 15%, transparent 20%),
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
    //background-position: 0% 80%, -5% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 85% 30%,
  }
  &:after {
    animation: ${({ animate }) => (animate ? bottomAnimation : '')};
    display: ${({ animate }) => (animate ? 'block' : 'none')};
    bottom: -75%;
    background-image:
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%),
      radial-gradient(circle,  transparent 10%, ${({
        bubbleColor,
        bubble,
        isDisabled,
      }) => !isDisabled && bubble && bubbleColor} 15%, transparent 20%),
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%),
      radial-gradient(circle, ${({ bubbleColor, bubble, isDisabled }) =>
        !isDisabled && bubble && bubbleColor} 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
    //background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
}
`

export const Button = withTheme(
  ({
    color,
    shade,
    type = 'button',
    rounded = 'small',
    size = 'small',
    variant = 'default',
    hover = false,
    isDisabled = false,
    onClick = () => {},
    theme,
    bubble,
    children,
    ...rest
  }) => {
    const [animate, setAnimate] = React.useState(false)

    let borderRadius
    switch (rounded) {
      case 'small':
        borderRadius = theme.spaceScale(1)
        break
      case 'medium':
        borderRadius = theme.spaceScale(2)
        break
      case 'large':
        borderRadius = theme.spaceScale(4)
        break
      case 'full':
        borderRadius = theme.spaceScale(16)
        break
      default:
        borderRadius = '0rem'
    }

    let paddingSize
    switch (size) {
      case 'small':
        paddingSize = `${theme.spaceScale(1)} ${theme.spaceScale(2)}`
        break
      case 'medium':
        paddingSize = `${theme.spaceScale(2)} ${theme.spaceScale(3)}`
        break
      case 'large':
        paddingSize = `${theme.spaceScale(2)} ${theme.spaceScale(4)}`
        break
      default:
        paddingSize = `${theme.spaceScale(2)} ${theme.spaceScale(3)}`
    }

    const variants = {
      main: {
        border: 'none',
        backgroundColor: color ? theme.color[color][shade || 1] : 'white',
        color: theme.textContrast(
          color ? theme.color[color][shade || 1] : 'hsl(0, 100%, 100%)'
        ),
      },
      focus: {
        backgroundColor: color
          ? theme.color[color][shade + 1 || 2]
          : theme.color.grey[1],
      },
    }

    let { main, focus } = variants

    switch (variant) {
      case 'outline':
        main.border = `1px solid ${theme.color[color][shade || 1]}`
        main.color = color ? theme.color[color][shade || 1] : 'white'
        main.backgroundColor = 'white'
        focus.backgroundColor = color
          ? theme.color[color][1]
          : theme.color.grey[1]
        break
      case 'text':
        main.color = color ? theme.color[color][shade || 1] : 'black'
        main.backgroundColor = 'white'
        focus.backgroundColor = color
          ? theme.color[color][1]
          : theme.color.grey[1]
        break
      default:
        break
    }

    if (isDisabled) {
      main.color = theme.color.grey[6]
      main.border = 'none'
      main.backgroundColor = theme.color.grey[1]
      focus.backgroundColor = theme.color.grey[1]
    }

    const buttonStyles = {
      type,
      hover,
      isDisabled,
      borderRadius,
      paddingSize,
      border: main.border,
      color: main.color,
      backgroundColor: main.backgroundColor,
      focusBackground: focus.backgroundColor,
      bubbleColor: variant === 'default' ? main.backgroundColor : main.color,
      bubble,
      ...rest,
    }

    React.useEffect(() => {
      if (animate) {
        setTimeout(() => {
          setAnimate(false)
        }, [700])
      }
    }, [animate])
    return (
      <StyledButton
        animate={animate}
        onClick={e => {
          setAnimate(true)
          onClick()
        }}
        {...buttonStyles}
      >
        {children}
      </StyledButton>
    )
  }
)

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  shade: PropTypes.number,
  rounded: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
  hover: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  bubble: PropTypes.bool,
}
