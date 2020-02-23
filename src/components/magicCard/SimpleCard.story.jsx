import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { SimpleCard } from './SimpleCard'

storiesOf('Components', module).add('SimpleCard', () => (
  <>
    <SimpleCard />
  </>
))
