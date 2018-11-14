import { storiesOf } from '@storybook/react'
import React from 'react'

import { BaseButton, PrimaryButton, SecondaryButton } from '../Button'
import { FlexColDiv, FlexRowDiv } from '../Container'

storiesOf('Interactable', module)
  .add('Buttons', () => (
    <FlexColDiv>
      <FlexRowDiv>
        <BaseButton>Base Button</BaseButton>
      </FlexRowDiv>
      <FlexRowDiv>
        <PrimaryButton>Primary Button</PrimaryButton>
      </FlexRowDiv>
      <FlexRowDiv>
        <SecondaryButton>Secondary Button</SecondaryButton>
      </FlexRowDiv>
    </FlexColDiv>
  ));
