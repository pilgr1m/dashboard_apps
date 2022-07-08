import React, { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../../contexts'
import { links } from '../../data/dummy'

type Props = {

}

export const Sidebar: FC<Props> = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext()

  console.log('activeMenu: ', activeMenu)

  const handleCloseForMobile = () => {
    if (activeMenu && screenSize <= 900) setActiveMenu(false)
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-gray-400'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const handleClose = () => {
    setActiveMenu(!activeMenu)
  }

  const styles = ({ isActive }:any) => ({ backgroundColor: isActive ? currentColor : '' })

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <div>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseForMobile}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware style={{ color: currentColor }} />
              <span style={{ color: currentColor }}>Dashboard</span>
            </Link>
            <TooltipComponent content="Close Menu" position="BottomCenter">
              <button
                type="button"
                // className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 mr-4 block md:hidden"
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 mr-4 block"
                onClick={handleClose}
                style={{ color: currentColor }}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            { links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseForMobile}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    // style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : '' })}
                    style={styles}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
