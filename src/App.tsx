import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'

import { LoginPage } from './pages/LoginPage'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`
class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <GlobalStyle />
        <LoginPage />
      </div>
    )
  }
}

export default App
