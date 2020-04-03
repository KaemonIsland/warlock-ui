import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({ labelName, labelFor, type = 'text' }) => {
  return (
    <>
      <label htmlFor={labelFor}>{labelName}</label>
      <input id={labelFor} type={type} />
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  labelFor: PropTypes.string,
  labelName: PropTypes.string,
}
