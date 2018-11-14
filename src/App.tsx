import React, { Component } from 'react'

import './App.css'
import logo from './logo.svg'
import { LoginPage } from './pages/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    )
  }
}

export default App
