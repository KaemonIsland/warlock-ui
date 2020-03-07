import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { select, boolean, number, text } from '@storybook/addon-knobs'
import { Grid } from './Grid'
import gridReadMe from './Grid.md'

const justifyAndAlignOptions = {
  start: 'start',
  end: 'end',
  center: 'center',
  stretch: 'stretch',
}

const justifyAndAlignContent = {
  start: 'start',
  end: 'end',
  center: 'center',
  stretch: 'stretch',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  spaceEvenly: 'space-evenly',
}

const autoFlowOptions = {
  row: 'row',
  column: 'column',
  dense: 'dense',
}

const GridBox = styled.div`
  height: 5rem;
  width: 100%;
  background-color: rebeccapurple;
  color: white;
`

storiesOf('Layout', module)
  .addParameters({
    readme: {
      sidebar: gridReadMe,
    },
  })
  .add('Grid', () => (
    <Grid
      isInline={boolean('isInline', false)}
      gap={number('gap', 4)}
      templateColumns={text('templateColumns', Grid.repeat(3, Grid.fr(1)))}
      templateRows={text('templateRows', 'repeat(4, 1fr)')}
      justifyItems={select('justifyItems', justifyAndAlignOptions)}
      alignItems={select('alignItems', justifyAndAlignOptions)}
      justifyContent={select('justifyContent', justifyAndAlignContent)}
      alignContent={select('justifyContent', justifyAndAlignContent)}
      autoFlow={select('autoFlow', autoFlowOptions)}
      templateAreas={[
        'header header header',
        'content content aside',
        'content content aside',
        'footer footer footer',
      ]}
    >
      <Grid.Item
        justifySelf={select('justifySelf', justifyAndAlignOptions)}
        alignSelf={select('alignSelf', justifyAndAlignOptions)}
        area="header"
      >
        <GridBox>Header</GridBox>
      </Grid.Item>
      <Grid.Item area="content">
        <GridBox>Content</GridBox>
      </Grid.Item>
      <Grid.Item area="aside">
        <GridBox>Aside</GridBox>
      </Grid.Item>
      <Grid.Item area="footer">
        <GridBox>Footer</GridBox>
      </Grid.Item>
      <Grid.Item>
        <GridBox>5</GridBox>
      </Grid.Item>
      <Grid.Item>
        <GridBox>6</GridBox>
      </Grid.Item>
      <Grid.Item>
        <GridBox>7</GridBox>
      </Grid.Item>
      <Grid.Item>
        <GridBox>8</GridBox>
      </Grid.Item>
      <Grid.Item>
        <GridBox>9</GridBox>
      </Grid.Item>
      <Grid.Item>
        <GridBox>10</GridBox>
      </Grid.Item>
    </Grid>
  ))
