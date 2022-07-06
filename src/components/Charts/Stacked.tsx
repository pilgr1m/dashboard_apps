import React, { FC } from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts'
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from '../../data/dummy'
import { uniqueId } from 'lodash'

type Props = {
  width: string
  height: string
}

export const Stacked: FC<Props> = ({ width, height }) => {
  const f = 1

  return (
    <ChartComponent
      id="stack chart"
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
    >
      <Inject
        services={[Legend, Category, StackingColumnSeries, Tooltip]}
      />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, idx) => (
          <SeriesDirective key={uniqueId(`${idx}_`)} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}
