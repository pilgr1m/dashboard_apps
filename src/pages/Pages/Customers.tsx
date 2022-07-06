import React, { FC } from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Toolbar,
  Inject,
  Edit,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids'
import { uniqueId } from 'lodash'
import { customersData, customersGrid } from '../../data/dummy'
import { Header } from '../../components'

type Props = {

}

export const Customers: FC<Props> = () => {
  const a = 1

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          { customersGrid.map((item) => (
            <ColumnDirective key={uniqueId('keyColumnEmployees_')} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Filter, Sort, Edit, Selection]} />
      </GridComponent>
    </div>
  )
}
