import React, { FC } from 'react'
import { ChartHeader, LineChart } from '../../components'

type Props = {

}

export const Line: FC<Props> = () => {
  const a = 1

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="Line" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  )
}
