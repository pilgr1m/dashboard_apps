import React, { FC } from 'react'
import { SparklineAreaData, SparklineAreaDataType } from '../../data/dummy'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

type Props = {
  currentColor:string
  id: string
  type: 'Line' | 'Column' | 'WinLoss' | 'Pie' | 'Area' | undefined
  height:string
  width:string
  data:SparklineAreaDataType[]
  color:string
}

export const SparkLine: FC<Props> = ({
  currentColor,
  id,
  type,
  height,
  width,
  data,
  color,
}) => {
  const a = 1

  console.log('SPARKLine')

  return (
    <div>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        // dataSource={data}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${x} : data ${y}',
          trackLineSettings: { visible: true },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  )
}
