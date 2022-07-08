import React, { FC } from 'react'
import { pieChartData } from '../../data/dummy'
import { ChartHeader, Pie } from '../../components'

type Props = {

}

export const PiePage: FC<Props> = () => {
  const a = 1

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <Pie id="chart-pie" data={pieChartData} legendVisiblity height="full" />
      </div>
    </div>
  )
}
