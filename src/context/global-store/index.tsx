import { Dispatch, ReactNode, createContext, useReducer } from 'react'

import { UPDATE_MODE } from '~/constants'
import { theme } from '~/styles'

// Define the initial state type
type InitialStateType = {
  theme: object
  mode: 'dark' | 'light'
}

// Define the action type for your reducer
type ActionType = {
  type: string
  payload: any
}

// Initial state object
const initialState: InitialStateType = {
  theme,
  mode: 'dark',
}

// Create the context with proper types for state and dispatch
const GlobalContext = createContext<{
  state: InitialStateType
  dispatch: Dispatch<ActionType>
}>({
  state: initialState,
  dispatch: () => null,
})

// Define the reducer function
function globalReducer(state: InitialStateType, action: ActionType): InitialStateType {
  switch (action.type) {
    case 'UPDATE_THEME': {
      return {
        ...state,
        theme: action.payload, // Update the theme with the payload
      }
    }

    case UPDATE_MODE: {
      return {
        ...state,
        mode: action.payload, // Update the theme with the payload
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

// Global context provider component
function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>
}

export { GlobalContextProvider, GlobalContext }
