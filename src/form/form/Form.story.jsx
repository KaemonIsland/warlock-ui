import React from 'react'
import { storiesOf } from '@storybook/react'
import { Form, Input, Checkbox, Radio } from '../'
import readme from './Form.md'

storiesOf('Form', module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('Form', () => {
    const submitForm = e => {
      e.preventDefault()
    }
    return (
      <Form onSubmit={submitForm}>
        <Input />
        <Checkbox />
        <Radio />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  })
