import React from 'react'
import styled from 'styled-components'
import theme from '../res/theme'

interface Props {
  fontSize?: string
}

export const BaseTextField = styled.input`
  font-size: ${(props: Props) => props.fontSize};
  padding: 10px 14px;
  border-radius: 20px;
  border: 1px solid #ccc;

  :focus {
    outline: none;
  }
`

BaseTextField.defaultProps = {
  fontSize: theme.fontSize.normal
}

export const PrimaryTextField = styled(BaseTextField)`
  :focus {
    border: 2px solid ${theme.palette.primary};
    padding: 9px 13px;
  }
`

export const SecondaryTextField = styled(BaseTextField)`
  :focus {
    border: 2px solid ${theme.palette.accent};
    padding: 9px 13px;
  }
`
