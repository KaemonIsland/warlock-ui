import { useState, useRef } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

/**
 * Hook for handling popup accessability.
 * Should be used for components that have triggers and steal a users focus.
 *
 * This hook returns utility function close/open along with whether the state is open or not.
 *
 * @returns {object} - components necessary for accessibility.
 */
export const usePopupTrigger = (triggerProps = {}, popupProps = {}) => {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef()

  /**
   * Sets isOpen to false
   */
  const handleClose = () => {
    setIsOpen(false)
    enablePageScroll()
  }

  /**
   * Sets isOpen to true
   */
  const handleOpen = () => {
    setIsOpen(true)
    disablePageScroll()
  }

  /**
   * Sets isOpen to false when the escape key is clicked and isOpen is true
   */
  const handleKeyDown = (event) => event.keyCode === 27 && isOpen && handleClose()

  /**
   * Sets isOpen to false when the user clicks outside of the modal content
   */
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose()
    }
  }

  const trigger = { onClick: handleOpen, ...triggerProps }

  const popup = {
    onClickOutside: handleClickOutside,
    onKeyDown: handleKeyDown,
    isOpen,
    role: 'dialog',
    onClose: handleClose,
    modalRef,
    ...popupProps,
  }

  return {
    popup,
    trigger,
    isOpen,
    close: handleClose,
    open: handleOpen,
  }
}
