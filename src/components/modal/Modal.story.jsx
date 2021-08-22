import React from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from './Modal'
import { usePopupTrigger } from '../../hooks'

storiesOf('Components', module).add('Modal', () => {
  const modal = usePopupTrigger()

  return (
    <main className="content">
      <p>Lorem ipsum paragraph...</p>
      <p>Lorem ipsum paragraph...</p>
      <p>Lorem ipsum paragraph...</p>
      <button {...modal.trigger}>Click Me!</button>
      <Modal {...modal.popup}>
        <div>All the cool content that could ever be contented.</div>
      </Modal>
    </main>
  )
})
