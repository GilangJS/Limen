import React from 'react'
import styled from 'styled-components'

import theme from '../res/theme'

import { PrimaryButton } from '../components/Button'
import { FlexColDiv } from '../components/Container'
import { PrimaryTextField } from '../components/TextField'

const UsernameField = PrimaryTextField
const PasswordField = PrimaryTextField
const LoginButton = PrimaryButton

const PageContainer = styled(FlexColDiv)`
  background-color: ${theme.palette.white};
  height: 100%;
`

const PageContent = styled(FlexColDiv)`
  width: 100%;
  max-width: 400px;
  align-self: center;
  justify-content: center;
  padding: 0 20px;
  margin: auto;

  position: relative;
  top: -100px;
`

const FormGroup = styled(FlexColDiv)`
  > * {
    margin-top: 15px;
  }
`

const Title = styled.h1`
  color: ${theme.palette.primary};
  text-align: center;
`

export class LoginPage extends React.Component {
  render() {
    return (
      <PageContainer>
        <PageContent>
          <Title>Login</Title>
          <FormGroup>
            <UsernameField placeholder={'Username'}/>
            <PasswordField placeholder={'Password'} type={'password'}/>
            <LoginButton>Login</LoginButton>
          </FormGroup>
        </PageContent>
      </PageContainer>
    )
  }
}
