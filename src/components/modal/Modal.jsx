import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const ModalBackdrop = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.15);
`

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2.5em 1.5em 1.5em 1.5em;
  background-color: #ffffff;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 500px) {
    left: 50%;
    top: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    max-width: 30em;
    max-height: calc(100% - 1em);
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
  line-height: 1;
  background: #f6f6f7;
  border: 0;
  box-shadow: 0;
  cursor: pointer;
`

const CloseButtonIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: transparent;
  stroke: black;
  stroke-linecap: round;
  stroke-width: 2;
`

const ModalMainContent = styled.div`
  padding-top: 0.25em;
`

const CloseButtonText = styled.span`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`

/**
 * Modal component that uses React Portals!
 *
 * @param {boolean} isOpen - Determines if we should render the modal
 * @param {function} onClose - Function that gets called when the close icon is clicked
 * @param {string} role - The role of the modal
 * @param {string} ariaLabel - A label describing the Modal's current content
 *
 * @returns {function} React component that is rendered at the end of the content
 */
export const Modal = ({
  isOpen,
  onClose,
  role = 'dialog',
  ariaLabel = '',
  modalRef,
  onClickOutside,
  children,
  ...props
}) => {
  if (!isOpen) {
    return null
  }

  return createPortal(
    <ModalBackdrop
      aria-modal="true"
      tabIndex="-1"
      role={role}
      aria-label={ariaLabel}
      onClick={onClickOutside}
      {...props}
    >
      <ModalContainer ref={modalRef}>
        <CloseButton onClick={onClose} aria-labelledby="close-modal">
          <CloseButtonText id="close-modal">Close Modal</CloseButtonText>
          <CloseButtonIcon viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
          </CloseButtonIcon>
        </CloseButton>
        <ModalMainContent>{children}</ModalMainContent>
      </ModalContainer>
    </ModalBackdrop>,
    document.body,
  )
}
