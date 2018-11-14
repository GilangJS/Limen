import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { BaseButton, PrimaryButton, SecondaryButton } from '../Button'
import { FlexColDiv, FlexRowDiv } from '../Container'
import {
  BaseTextField,
  PrimaryTextField,
  SecondaryTextField
} from '../TextField'

const GroupContainer = styled(FlexColDiv)`
  > *:not(:first-child) {
    margin-top: 10px;
  }
`

storiesOf('Interactable', module)
  .add('Buttons', () => (
    <GroupContainer>
      <FlexRowDiv>
        <BaseButton>Base Button</BaseButton>
      </FlexRowDiv>
      <FlexRowDiv>
        <PrimaryButton>Primary Button</PrimaryButton>
      </FlexRowDiv>
      <FlexRowDiv>
        <SecondaryButton>Secondary Button</SecondaryButton>
      </FlexRowDiv>
    </GroupContainer>
  ))
  .add('TextFields', () => (
    <GroupContainer>
      <FlexRowDiv>
        <BaseTextField placeholder={'BaseTextField'} />
      </FlexRowDiv>
      <FlexRowDiv>
        <PrimaryTextField placeholder={'BaseTextField'} />
      </FlexRowDiv>
      <FlexRowDiv>
        <SecondaryTextField placeholder={'BaseTextField'} />
      </FlexRowDiv>
    </GroupContainer>
  ))
