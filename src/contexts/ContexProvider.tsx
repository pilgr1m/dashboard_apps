import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react'

type InitialStateType = {
  chat: boolean
  card: boolean
  userProfile: boolean
  notification: boolean
}
const InitialState:InitialStateType = {
  chat: false,
  card: false,
  userProfile: false,
  notification: false,
}

// TODO fix types
type InitialStateContext = {
  activeMenu: boolean
  setActiveMenu: (arg: boolean) => void
  screenSize: any
  setScreenSize: (arg: any) => void
  isClicked: InitialStateType
  setIsClicked: Dispatch<SetStateAction<InitialStateType>>
  handleClick: (arg: string) => void
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
  const [isClicked, setIsClicked] = useState(InitialState)
  const [screenSize, setScreenSize] = useState(undefined)

  const handleClick = (clicked:string) => setIsClicked({ ...InitialState, [clicked]: true })

  // const value = useMemo(() => ({ activeMenu, setActiveMenu }), [activeMenu])

  return (
    <StateContext.Provider
      // TODO fix
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      { children }
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
