import React from 'react'
import { storiesOf } from '@storybook/react'
import { Disclosure } from './Disclosure'
import disclosureReadMe from './Disclosure.md'

storiesOf('Components', module)
  .addParameters({
    readme: {
      sidebar: disclosureReadMe,
    },
  })
  .add('Disclosure', () => (
    <Disclosure summary="Click me to reveal content!">
      I&apos;m content that is hidden within the disclosure!
    </Disclosure>
  ))
