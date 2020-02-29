import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { SimpleCard } from './SimpleCard'

storiesOf('Components', module).add('SimpleCard', () => (
  <div
    style={{
      backgroundColor: '#fff',
      height: '100vh',
      widht: '100vw',
      marginTop: '-1rem',
      padding: '1rem',
    }}
  >
    <SimpleCard />
  </div>
))
