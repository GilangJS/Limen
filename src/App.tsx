import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { LandingPage } from './pages/LandingPage'
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
        <BrowserRouter>
          <Switch>
            <Route exact={true} path={'/login'} render={() => <LoginPage/>}/>
            <Route exact={true} path={'/'} render={() => <LandingPage />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
