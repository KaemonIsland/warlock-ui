# Text 📱

## Usage

Text is for containing any and all text! Use this component whenever you need to manipulate font-sizes, weights, color, style, etc.

See sizing from Design System

## Params

| Param     | Type    | Default Value | Required? | Description                                                                |
| --------- | ------- | ------------- | --------- | -------------------------------------------------------------------------- |
| size      | number  | 3             | no        | font size, can be between 1-11.                                            |
| isBold    | boolean | false         | no        | Makes the text **Bold**                                                    |
| isItalics | boolean | false         | no        | Changes text to _italics_                                                  |
| color     | string  | black         | no        | Changes the color palette                                                  |
| shade     | number  | 1             | no        | Changes the shade                                                          |
| family    | string  | roboto        | no        | Sets the font-family. The font must be loaded in the app to use correctly. |

_Note:_ You can pass any additional props to text as it will be passed to the text object itself

## Example

```react
<Text size={5} isBold color="purple" shade={3}>
  I'm some pretty big text!
</Text>
```
