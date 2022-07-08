import React, { FC } from 'react'
import { ChartHeader } from '../../components'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from '@syncfusion/ej2-react-charts'

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { uniqueId } from 'lodash'
import { useStateContext } from '../../contexts'

type Props = {

}

export const Bar: FC<Props> = () => {
  const { currentMode } = useStateContext()

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
        <ChartComponent
          id="line-chart"
          height="420px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {
              barCustomSeries.map((item) => (
                <SeriesDirective key={uniqueId('lineChartKey_')} {...item} />))
            }
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}
