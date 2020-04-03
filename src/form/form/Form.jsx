import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../elements'
import styled from 'styled-components'

const StyledForm = styled.form(({ theme }) => {})

export const Form = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
}

const FormButton = ({ children }) => {
  return (
    <Button color="blue" shade={7} type="submit">
      {children}
    </Button>
  )
}

FormButton.propTypes = {
  children: PropTypes.node,
}

Form.Button = FormButton
