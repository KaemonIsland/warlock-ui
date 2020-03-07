# Grid 🍱

## Usage

It's [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) but in a React component. This component should be used when creating a grid layout. It should not be used in place of Flex, but along with. Some examples would be designing a basic layout for a web page, smaller components like reviews etc.

### `<Grid />`

Grid is the container component for building a layout. Here you will set the columns, rows, alignment, spacing, etc.

| Param           | Type    | Default Value | Required? | Description                                                                                                                                                |
| --------------- | ------- | ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isInline        | Boolean | false         | no        | set to true to use inline-grid instead of grid                                                                                                             |
| templateRows    | String  |               | no        | Row layout [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)                                                                 |
| templateColumns | String  |               | no        | Column layout [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)                                                           |
| autoRows        | String  |               | no        | Auto row layout [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)                                                                |
| autoColumns     | String  |               | no        | Auto column layout [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)                                                          |
| autoFlow        | String  |               | no        | Defines how rows/columns should be fit, Options are 'dense', 'rows', 'columns' [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) |
| templateAreas   | Array   |               | no        | Define areas [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)                                                              |
| columnGap       | Number  |               | no        | Defines column gap width. Uses spacing scale                                                                                                               |
| rowGap          | Number  |               | no        | Defines row gap width. Uses spacing scale                                                                                                                  |
| gap             | Number  |               | no        | Defines gap for row and columns. Uses spacing scale                                                                                                        |
| justifyItems    | String  |               | no        | Horizontal alignment for grid items. Options are 'start', 'end', 'center', 'stretch'                                                                       |
| alignItems      | String  |               | no        | Vertical alignment for grid items. Options are 'start', 'end', 'center', 'stretch'                                                                         |
| justifyContent  | String  |               | no        | Horizontal alignment for grid container. Options are 'start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'                  |
| alignContent    | String  |               | no        | Vertical alignment for grid container. Options are 'start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'                    |

### `<Grid.Item />`

Grid.Item must always be nested within the Grid component. This is where you will add the content that will be a grid node. You can also specify alignment, and area.

| Param       | Type   | Default Value | Required? | Description                                                                          |
| ----------- | ------ | ------------- | --------- | ------------------------------------------------------------------------------------ |
| column      | String |               | no        | Defines column start / column end                                                    |
| row         | String |               | no        | Defines row start / row end                                                          |
| area        | String |               | no        | Sets the area if there is a defined grid-template-area                               |
| justifySelf | String |               | no        | Horizontal alignment for grid items. Options are 'start', 'end', 'center', 'stretch' |
| alignSelf   | String |               | no        | Vertical alignment for grid items. Options are 'start', 'end', 'center', 'stretch'   |

## Grid Extras

There are several additional grid functions that allow the use of fraction, min-content, max-content, auto-fill, etc.

### Grid.space

Formats a number to use our scaling system.
`Grid.space(4) === 1rem`

### Grid.fr

Similar to Grid.space but formats the number to use fr
`Grid.fr(1) === 1fr`

### Grid.repeat

Returns a string to use repeat when defining rows/columns.
`Grid.repeat(2, Grid.fr(4)) === repeat(2, 4fr)`

### Grid.minMax

Similar to Grid.repeat but for minMax. Sets the minimum/maximum space a grid item can take
`Grid.minMax(3, 5) === minmax(3, 5)`

### Grid.minContent

Returns min-content. Used for using the minimum width possible for grid items

### Grid.maxContent

The opposite of min-content. Allows grid item to take up the maximum width for grid items

## Grid.autoFill

Allows grid items to fill automatically based off of specific rules.

## Example

```React
<Grid
  isInline
  templateColumns={Grid.repeat(3, Grid.fr(1))
  gap={4}}
  justifyItems="center"
  templateAreas={
    [
      "header header header",
      "content content aside",
      "content content aside",
      "footer footer footer"
    ]
  }
>
  <Grid.Item justifySelf="center" area="header">{HeaderContent}</Grid.Item>
  <Grid.Item area="aside">{AsideContent}</Grid.Item>
  <Grid.Item area="footer">{FooterContent}</Grid.Item>
</Grid>
```
