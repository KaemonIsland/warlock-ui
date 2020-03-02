import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { formatPaddingAndMargin } from '../../theme/spacing'

const StyledContainer = styled.div(
  ({
    border,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginVertical,
    marginHorizontal,
    shadow,
    theme,
  }) => {
    const formattedPadding = formatPaddingAndMargin(
      padding,
      paddingVertical,
      paddingHorizontal,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight
    )
    const formattedMargin = formatPaddingAndMargin(
      margin,
      marginVertical,
      marginHorizontal,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight
    )

    return {
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      padding: formattedPadding,
      margin: formattedMargin,
      borderRadius: '0.5rem',
      border: border ? '1px solid black' : 'none',
      boxShadow: shadow ? theme.boxShadow.single[shadow] : '',
    }
  }
)

export const Container = ({
  width = 'auto',
  minWidth = 'auto',
  maxWidth = '100%',
  height = 'auto',
  minHeight = 'auto',
  maxHeight = '100%',
  border = false,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingVertical,
  paddingHorizontal,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
  marginHorizontal,
  shadow,
  children,
}) => {
  const containerStyles = {
    border,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginVertical,
    marginHorizontal,
    shadow,
  }

  return <StyledContainer {...containerStyles}>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.node,
  border: PropTypes.bool,
  width: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  padding: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingVertical: PropTypes.string,
  paddingHorizontal: PropTypes.string,
  margin: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginVertical: PropTypes.string,
  marginHorizontal: PropTypes.string,
  shadow: PropTypes.number,
}
