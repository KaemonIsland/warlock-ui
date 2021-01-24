# Disclosure 📜

## Usage

For when you want to disclose something, duh. You should this component when you need to hide details to save vertical space.

Things like computer specs, notes about a product, other details that aren't necessary to the whole view.

## Params

summary, isOpen = false, summaryProps, containerProps, children

| Param          | Type    | Default Value | Required? | Description                                                                               |
| -------------- | ------- | ------------- | --------- | ----------------------------------------------------------------------------------------- |
| summary        | string  | ''            | yes       | The disclosure header, this will always be shown and should describe the content it hides |
| isOpen         | boolean | false         | no        | Can determine if the disclosure is open initially.                                        |
| summaryProps   | object  | {}            | no        | Props that will be sent to the `<Text />` component within the summary                    |
| containerProps | object  | {}            | no        | Props for the disclosure container component.                                             |
| children       | node    | undefined     | yes       | The content that will be shown when the disclosure is opened.                             |

## Example

```react
<Disclosure isOpen summary="Requirements">
  <ul>
    <li>Taken out the trash</li>
    <li>Paid $5</li>
    <li>Worked out for 10 min</li>
  </ul>
</Disclosure>
```
