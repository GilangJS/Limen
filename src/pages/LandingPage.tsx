import React from 'react'
import styled from 'styled-components'
import { PageContainer } from '../components/Container'
import { Navbar } from '../components/Navbar'

export class LandingPage extends React.Component {
  render() {
    return (
      <PageContainer>
        <Navbar />
      </PageContainer>
    )
  }
}
