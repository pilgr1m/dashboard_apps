import React, { createContext, useContext, useMemo, useState } from 'react'

type InitialStateContext = {
  activeMenu: boolean
  setActiveMenu: (arg: any) => void
  chat: boolean
  cart: boolean
  userProfile: boolean
  notification: boolean
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const StateContext = createContext<InitialStateContext>({})

// TODO type! children
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)

  // const value = useMemo(() => ({ activeMenu, setActiveMenu }), [activeMenu])

  return (
    <StateContext.Provider
      // TODO fix
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ activeMenu, setActiveMenu }}
    >
      { children }
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
