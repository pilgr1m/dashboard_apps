import React, {
  ChangeEventHandler,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

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
  currentColor: string,
  setCurrentColor: Dispatch<SetStateAction<string>>,
  currentMode: string,
  setCurrentMode: Dispatch<SetStateAction<string>>,
  themeSettings: boolean,
  setThemeSettings: Dispatch<SetStateAction<boolean>>,
  setMode: ChangeEventHandler<HTMLInputElement>,
  setColor: (arg: string) => void,
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
  //
  // setColor, setMode, currentMode, currentColor, setThemeSettings
  const [currentColor, setCurrentColor] = useState('#03C9D7')
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)

  // TODO fix any
  const setMode = (e: any) => {
    setCurrentMode(e.target.value)

    localStorage.setItem('themeMode', e.target.value)
  }

  const setColor = (color: string) => {
    setCurrentColor(color)

    localStorage.setItem('colorMode', color)
  }

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
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      { children }
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
