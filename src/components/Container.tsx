import React from 'react'
import styled from 'styled-components'

export const FlexDiv = styled.div`
  display: flex;
`

export const FlexColDiv = styled(FlexDiv)`
  flex-direction: column;
`

export const FlexRowDiv = styled(FlexDiv)`
  flex-direction: row;
`
