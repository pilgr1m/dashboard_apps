import React, { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../../data/dummy'

type Props = {

}

export const Sidebar: FC<Props> = () => {
  const activeMenu = true

  const activeLink = 'flex items-center- gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink = 'flex items-center- gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const onClick = () => {
    console.log('click sidebar')
  }
  const handleClose = () => {
    console.log('click handleClose')
  }
  const handleChoose = () => {
    console.log('click handleChoose')
  }

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:overflow-hidden pb-10">
      {activeMenu && (
        <div>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={onClick} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>Dashboard</span>
            </Link>
            <TooltipComponent content="Close Menu" position="BottomCenter">
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-light-gray block md:hidden"
                onClick={handleClose}
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
                {item.links.map((link) => {
                  console.log('link: ', link)

                  return (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleChoose}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
