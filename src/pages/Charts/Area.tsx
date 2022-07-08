import React, { FC } from 'react'
import { useStateContext } from '../../contexts'
import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SplineAreaSeries,
  SeriesCollectionDirective,
  SeriesDirective,
} from '@syncfusion/ej2-react-charts'
import { areaPrimaryXAxis, areaPrimaryYAxis, areaCustomSeries } from '../../data/dummy'
import { uniqueId } from 'lodash'
import { ChartHeader } from '../../components'

type Props = {

}

export const Area: FC<Props> = () => {
  const { currentMode } = useStateContext()

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="Area" title="Inflation Rate in Percentage" />
      <div className="w-full">
        <ChartComponent
          id="line-chart"
          height="420px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {
            areaCustomSeries.map((item) => (
              <SeriesDirective key={uniqueId('lineChartKey_')} {...item} />))
          }
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}
