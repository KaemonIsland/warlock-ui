# Text 📱

## Usage

Text is for containing any and all text! Use this component whenever you need to manipulate font-sizes, weights, color, style, etc.

See sizing from Design System

## Params

| Param     | Default Value | Required? | Description                     |
| --------- | ------------- | --------- | ------------------------------- |
| size      | 3             | no        | font size, can be between 1-11. |
| isBold    | false         | no        | Makes the text **Bold**         |
| isItalics | false         | no        | Changes text to _italics_       |

_Note:_ You can pass any additional props to text as it will be passed to the text object itself

## Example

```react
<Text size={5} isBold>
  I'm some pretty big text!
</Text>
```
