import React, { FC } from 'react'
import { ChartHeader, Stacked } from '../../components'

type Props = {

}

export const StackedPage: FC<Props> = () => {
  const a = 1

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="StackedPage" title="Revenue Breakdown" />
      <div className="w-full">
        <Stacked width="320px" height="360px" />
      </div>
    </div>
  )
}
