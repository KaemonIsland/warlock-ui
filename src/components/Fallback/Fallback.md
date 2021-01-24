# Fallback 🖼

## Usage

For when you are unable to show content. Unable to load a product or image? Trying to load a page but something goes wrong? Use the fallback!

This component should be used alongside `Error Boundaries` most of the time!

Any children passed to the fallback should be used as an action to fix the error. Either navigating away from the page, or reloading it.

## Params

| Param        | Type   | Default Value | Required? | Description                                                             |
| ------------ | ------ | ------------- | --------- | ----------------------------------------------------------------------- |
| image        | string | ''            | yes       | The image src                                                           |
| imageAlt     | string | ''            | yes       | Image alt text for accessibility                                        |
| size         | enum   | 'medium'      | no        | Sets the image size. Options: 'xLarge', 'large', 'medium', and 'small'. |
| message      | string | ''            | yes       | Initial message to render. Should be short, sweet, and to the point.    |
| messageProps | object | {}            | no        | Props for the fallback message. It uses a `<Text />` component.         |
| children     | node   | undefined     | yes       | The action that will be shown below the message.                        |

## Example

```react
<Fallback
  image={sadCatImg}
  imageAlt="Sad Kitty"
  message="Something went wrong!"
>
  I&apos;m here for additional actions.
  <Button>Click me to go back and view other stuff!</Button>
</Fallback>
```
