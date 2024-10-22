import { useContext } from 'react'

import { GlobalContext } from '../../context/global-store'

export const useTheme = () => {
  const { state, dispatch } = useContext(GlobalContext)

  return {
    state,
    dispatch,
  }
}
