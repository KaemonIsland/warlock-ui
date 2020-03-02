import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid } from './Grid'
import gridReadMe from './Grid.md'

storiesOf('Layout', module)
  .addParameters({
    readme: {
      sidebar: gridReadMe,
    },
  })
  .add('Grid', () => (
    <Grid gridGap="1rem">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </Grid>
  ))
