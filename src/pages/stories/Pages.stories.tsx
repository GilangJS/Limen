import { storiesOf } from '@storybook/react'
import React from 'react'

import { LoginPage } from '../LoginPage'

storiesOf('Pages', module)
  .add('LoginPage', () => (
    <div style={{ height: '100%' }}>
      <LoginPage />
    </div>
  ))
