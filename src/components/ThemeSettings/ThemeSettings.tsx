import React, { FC } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { themeColors } from '../../data/dummy'
import { useStateContext } from '../../contexts'
import { uniqueId } from 'lodash'

type Props = {

}

export const ThemeSettings: FC<Props> = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext()

  const handleClickCloseSettings = () => {
    setThemeSettings(false)
  }
  const handleClickSetCurrentColor = (item: any) => {
    setColor(item.color)
  }

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] dark:bg-main-dark-bg w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">
            Setting
          </p>
          <button
            type="button"
            onClick={handleClickCloseSettings}
            style={{ color: currentColor, borderRadius: '50%' }}
            className="text-2xl p-1 hover:drop-shadow-xl hover:bg-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl"> Theme Options </p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>

          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {
              themeColors.map((item) => {
                const isCurrColorOwn = item.color === currentColor

                // console.log('item: ', item)
                // console.log('isCurrColorOwn: ', isCurrColorOwn)

                return (
                  <TooltipComponent
                    key={uniqueId('themeKey_')}
                    content={item.name}
                    position="TopCenter"
                  >
                    <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                      <button
                        type="button"
                        className="h-10 w-10 rounded-full cursor-pointer"
                        style={{ backgroundColor: item.color }}
                        onClick={() => handleClickSetCurrentColor(item)}
                      >
                        <BsCheck
                          // ${item.color === currentColor ? 'block' : 'hidden'}`}
                          className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}
                        />
                      </button>
                    </div>
                  </TooltipComponent>
                )
              })
            }
          </div>
        </div>

        {/* <div className="p-4 border-t-1 border-color ml-4"> */}
        {/*  <p className="font-semibold text-xl ">Theme Colors</p> */}
        {/*  <div className="flex gap-3"> */}
        {/*    {themeColors.map((item) => ( */}
        {/*      <TooltipComponent key={uniqueId('key_')} content={item.name} position="TopCenter"> */}
        {/*        <div */}
        {/*          className="relative mt-2 cursor-pointer flex gap-5 items-center" */}
        {/*          key={item.name} */}
        {/*        > */}
        {/*          <button */}
        {/*            type="button" */}
        {/*            className="h-10 w-10 rounded-full cursor-pointer" */}
        {/*            style={{ backgroundColor: item.color }} */}
        {/*            onClick={() => setColor(item.color)} */}
        {/*          > */}
        {/*            <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} /> */}
        {/*          </button> */}
        {/*        </div> */}
        {/*      </TooltipComponent> */}
        {/*    ))} */}
        {/*  </div> */}
        {/* </div> */}

      </div>
    </div>
  )
}
