import React from 'react'
import { storiesOf } from '@storybook/react'
// import { select } from '@storybook/addon-knobs'
import { MagicCard } from '.'

storiesOf('Components', module).add('MagicCard', () => (
  <>
    <MagicCard color="blue-black" />
    <MagicCard color="black-green" />
    <MagicCard color="blue-red" />
    <MagicCard color="white-black" />
    <MagicCard color="black-red" />
    <MagicCard color="green-white" />
    <MagicCard color="green-blue" />
    <MagicCard color="white-blue" />
    <MagicCard color="red-white" />
    <MagicCard color="red-green" />
    <MagicCard color="multi" />
    <MagicCard color="artifact" />
    <MagicCard color="white" />
    <MagicCard color="black" />
    <MagicCard color="red" />
    <MagicCard color="blue" />
    <MagicCard color="green" />
  </>
))
