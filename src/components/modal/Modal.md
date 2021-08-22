# Modal 🖥️

## Usage

The Modal is a popup that moves the users focus to the center of the screen. It should be used when the user needs to make a complicated choice. For example, in Mana-Flood a card can have multiple variants. By default the basic card version is selectable, however if more variants are needed a modal can be opened up showing each example.

The Modal should ONLY be used when necessary. They add extra clicks to get the user to the content or actions that they want, and should be used sparingly. It's possible some refactoring, or different options could be easier for yourself and the user.

### usePopupTrigger

The `usePopupTrigger` hook was made in tandem to the modal component. It makes the modal accessible by allowing features like pressing the `esc` key to close the modal, or by automatically moving focus to the close icon. It should be used whenever you are using a modal!

Need to override some props?? The usePopupTrigger accepts an object as a single parameter that can pass down `triggerProps` and `popupProps` to the component.

## Params

| Param          | Type    | Default Value    | Required? | Description                                                           |
| -------------- | ------- | ---------------- | --------- | --------------------------------------------------------------------- |
| isOpen         | boolean | false            | yes       | Whether the modal is open                                             |
| onClose        | func    | () => {}         | yes       | Close function that gets called when the modal closes                 |
| role           | string  | 'dialog'         | yes       | The ARIA-ROLE used for the modal.                                     |
| ariaLabel      | string  | 'modal'          | yes       | The ARIA-LABEL used for the modal                                     |
| modalRef       | ref     | modalContainer   | yes       | Allows onClickOutside functionality                                   |
| buttonRef      | ref     | modalCloseButton | yes       | Allows auto-focusing the close button on open                         |
| onClickOutside | func    | () => {}         | yes       | Function that gets called when user clicks outside of modal container |

## Example

```react
const modal = useOnClickOutside()

return (
  <div>
    <button type="button" {...modal.trigger}>Click Me!</button>
    <Modal {...modal.popup}>
      <p>Do you like me?</p>
      <button>Yes</button>
      <button>Maybe</button>
    </Modal>
  </div>
)
```
