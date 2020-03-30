# Button 🔲

## Usage

You know, for when you need to click something! Use it as a way for users to interact with the website

The Button has 3 main variants: Default, Outline, and Text.

## Props

| Param      | Type    | Default Value | Required? | Description                                                                                     |
| ---------- | ------- | ------------- | --------- | ----------------------------------------------------------------------------------------------- |
| color      | string  | black         | no        | Changes the color of the buttons background and text. Can use any color from the theme paletter |
| shade      | number  | 4             | no        | Changes the shade of the color. Must be between 1-10                                            |
| type       | string  | button        | no        | Declares the type of button. Can by 'button', 'submit', and 'reset                              |
| rounded    | string  | small         | no        | Changes the rounded edges of the button. Can be 'small', 'medium', 'large', 'full', and 'none'  |
| size       | string  | small         | no        | Changes size of badding for the button. Can be 'small', 'medium', or 'large'                    |
| variant    | string  | filled        | no        | Changes button style. Can be 'filled', 'outline', 'text'                                        |
| isDisabled | boolean | false         | no        | Disables the button                                                                             |
| onClick    | func    | function      | no        | Callback that is called on button click                                                         |
| hover      | boolean | false         | no        | Applies hover effect when interacting with button                                               |
| bubble     | boolean | true          | no        | Applies bubble effect on button click                                                           |

## Example

```react
<Button color="blue" shade={4} onClick={() => doTheThing()}>Confirm</Button>
```
