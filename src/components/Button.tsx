import React from 'react'
import styled from 'styled-components'
import theme from '../../res/theme'

interface Props {
  fontSize?: string
}

export const BaseButton = styled.button`
  font-size: ${(props: Props) => props.fontSize };
  padding: 8px 12px;
  border-radius: 20px;

  :focus {
    outline: none;
  }
`
BaseButton.defaultProps = {
  fontSize: '14px'
}

export const BaseColoredButton = styled(BaseButton)`
  color: ${theme.palette.white};
  border: none;
`

export const PrimaryButton = styled(BaseColoredButton)`
  background-color: ${theme.palette.primary};
`

export const SecondaryButton = styled(BaseColoredButton)`
  background-color: ${theme.palette.accent};
`
