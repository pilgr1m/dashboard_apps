import React, { FC } from 'react'
import { useStateContext } from '../../contexts'
import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'
import { uniqueId } from 'lodash'

type Props = {

}

export const LineChart: FC<Props> = () => {
  const { currentMode } = useStateContext()

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {
          lineCustomSeries.map((item) => (
            <SeriesDirective key={uniqueId('lineChartKey_')} {...item} />))
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}
