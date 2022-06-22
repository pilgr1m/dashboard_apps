import React, { FC } from 'react'
import './App.css'
import { TestComponent } from './components'

type Props = {
  prop?: string
}

export const App: FC<Props> = () => {
  const a = 1

  return (
    <div className="App">
      hello world
      <br />
      <TestComponent />
    </div>
  )
}
