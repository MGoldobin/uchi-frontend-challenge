import { useContext } from 'react'

import { AppContext } from '../store/store'

export const useGlobalContext = () => {
  return useContext(AppContext)
}