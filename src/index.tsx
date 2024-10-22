import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AppRoutes } from '~/routes'
import { GlobalStyle, colors, theme } from '~/styles'

import { GlobalContext } from '~/context/global-store'

export function Index() {
  const { state } = useContext(GlobalContext)

  const selectedTheme = {
    ...theme,
    colors: colors[state.mode],
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
