# FlipCard 🔄

## Usage

The FlipCard is used to display content on multiple sides of an element. Examples would include displaying informational content on one side, and actions on the other. Think product pricing plans.

The FlipCard has three components.

- `FlipCard` The container for the main component.
- `FlipCard.Front` The front side of the card
- `FlipCard.Back` The back side of the card

## Params

| Param          | Type    | Default Value | Required? | Description                                                                                                                                 |
| -------------- | ------- | ------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| isPaddingless  | boolean | true          | no        | Whether the card container has padding                                                                                                      |
| flipDirection  | enum    | 'horizontal'  | no        | Determines the axis of the flip. Can be 'horizontal' or 'vertical'                                                                          |
| containerProps | object  | {}            | no        | Props that will be passed to the children wrapper. This is not the outer side container! Those props will be passed to the card by default. |
| children       | node    | undefined     | yes       | Children that will be shown on each card face.                                                                                              |

## Example

```react
<FlipCard>
  <FlipCard.Front>Click me to flip!</FlipCard.Front>
  <FlipCard.Back>
    <p>Wow there is a full other side here!</p>
  </FlipCard.Back>
</FlipCard>
```
