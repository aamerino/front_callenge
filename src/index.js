import React from 'react'
import ReactDOM from 'react-dom'
import Home from './routes/Home'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { theme } from './Theme'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import Results from './routes/Results'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFamily};
  }
`
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)
