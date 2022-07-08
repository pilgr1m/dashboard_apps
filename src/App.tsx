import React, { FC, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  ECommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  PiePage,
  Pyramid,
  StackedPage,
} from './pages'
import { useStateContext } from './contexts'
import './App.css'

type Props = {
  prop?: string
}

export const App: FC<Props> = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext()
  const handlerOpenSettings = () => {
    setThemeSettings(true)
  }

  return (
    <div className={currentMode === 'Dark' ? 'dark' : 'light'}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            {/* Button Settings */}
            <TooltipComponent content="Settings" position="TopCenter">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: '50%' }}
                onClick={handlerOpenSettings}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar */}
          <div
            // className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white" - activeMenu
            // className="w-0 dark:bg-secondary-dark-bg"> - !activeMenu
            className={`dark:bg-secondary-dark-bg ${activeMenu ? 'w-72 fixed sidebar bg-white' : 'w-0'}`}
          >
            <Sidebar />
          </div>

          {/* Navbar */}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {/* Settings Component */}
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* ECommerce */}
                <Route path="/" element={<ECommerce />} />
                <Route path="/ecommerce" element={<ECommerce />} />

                {/* Tables */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<PiePage />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<StackedPage />} />
              </Routes>
            </div>

          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}
