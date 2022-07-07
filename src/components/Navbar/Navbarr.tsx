import React, { FC, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../../data/avatar.jpg'
import { Card, Chat, Notification, UserProfile } from '../../components'
import { useStateContext } from '../../contexts'

type Props = {

}
type NavButtonProps = {
  title: string,
  customFunc: any,
  icon: any,
  color: any,
  dotColor?: any,
}

const NavButton: FC<NavButtonProps> = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
)

export const Navbar: FC<Props> = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  const handlerToggleMenu = () => setActiveMenu(!activeMenu)
  // const handleClick = (str: string) => str

  return (
    <div className="flex justify-between  p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={handlerToggleMenu}
        icon={<AiOutlineMenu />}
        color={currentColor}
        // dotColor="blue"
      />

      {/* buttons  */}
      <div className="flex">
        {/* cart */}
        <NavButton
          title="Card"
          customFunc={() => handleClick('card')}
          icon={<FiShoppingCart />}
          color={currentColor}
          // dotColor="blue"
        />
        {/* chat */}
        <NavButton
          title="Chat"
          customFunc={() => handleClick('chat')}
          icon={<BsChatLeft />}
          color={currentColor}
          dotColor="#03C9D7"
        />
        {/* notification */}
        <NavButton
          title="Notification"
          customFunc={() => handleClick('notification')}
          icon={<RiNotification3Line />}
          color={currentColor}
          dotColor="#03C9D7"
        />

        {/* profile */}
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
        >
          <div
            role="button"
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="icon-avatar"
            />
            <p className="flex">
              <span className="text-gray-400 text-14">
                Hi,
              </span>
              {' '}
              <span className="text-gray-400 text-14 font-bold ml-1"> Michael </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.card && <Card />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}

      </div>
    </div>
  )
}
