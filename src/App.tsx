import { Index } from '.'

import { GlobalContextProvider } from '~/context/global-store'

export function App() {
  return (
    <GlobalContextProvider>
      <Index />
    </GlobalContextProvider>
  )
}
