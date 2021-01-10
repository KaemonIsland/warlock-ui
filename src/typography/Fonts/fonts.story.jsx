import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from '../'
import readme from './fonts.md'

storiesOf('Typography', module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('Fonts', () => (
    <div style={{ margin: '1rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <Text size={4}>Include these links in your head Tag in order to use the font!</Text>
      </div>

      <Text size={5} family="roboto">
        Roboto:
      </Text>
      <Text size={4} family="roboto" spacing={2}>
        AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </Text>
      <Text size={2}>
        {`<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" rel="stylesheet">`}
      </Text>
      <hr />
      <Text size={4} family="source sans pro">
        Source Sans Pro:
      </Text>
      <Text size={4} family="source sans pro" spacing={2}>
        AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </Text>
      <Text size={2}>
        {`<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i&display=swap" rel="stylesheet">`}
      </Text>
      <hr />
      <Text size={4} family="open sans">
        Open Sans:
      </Text>

      <Text size={4} family="open sans" spacing={2}>
        AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </Text>
      <Text size={2}>
        {`<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap" rel="stylesheet">`}
      </Text>
      <hr />
      <Text size={4} family="merriweather">
        Merriweather:
      </Text>
      <Text size={4} family="merriweather" spacing={2}>
        AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </Text>
      <Text size={2}>
        {`<link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i&display=swap" rel="stylesheet">`}
      </Text>
      <hr />
      <Text size={4} family="inter">
        Inter:
      </Text>
      <Text size={4} family="inter" spacing={2}>
        AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </Text>
      <Text size={2}>
        {`<link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">`}
      </Text>
      <hr />
      <Text size={4} family="lato">
        Lato:
      </Text>
      <Text size={4} family="lato" spacing={2}>
        AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </Text>
      <Text size={2}>
        {`<link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap" rel="stylesheet">`}
      </Text>
      <hr />
      <Text size={4} family="quicksand">
        Quicksand:
      </Text>
      <Text size={4} family="quicksand" spacing={2}>
        AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
      </Text>
      <Text size={2}>
        {`<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">`}
      </Text>
    </div>
  ))
