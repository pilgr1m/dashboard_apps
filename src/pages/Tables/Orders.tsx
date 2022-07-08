import React, { FC } from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids'

import { ordersData, contextMenuItems, ordersGrid } from '../../data/dummy'

import { Header } from '../../components'
import { uniqueId } from 'lodash'

type Props = {

}

export const Orders: FC<Props> = () => {
  const a = 1

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Tables / Dashboards" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          { ordersGrid.map((item) => (
            <ColumnDirective key={uniqueId('keyColumnOrders_')} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Page, Edit, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  )
}