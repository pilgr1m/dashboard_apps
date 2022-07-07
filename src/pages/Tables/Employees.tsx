import React, { FC } from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-grids'
import { uniqueId } from 'lodash'

import { employeesData, employeesGrid } from '../../data/dummy'
import { Header } from '../../components'

type Props = {

}

export const Employees: FC<Props> = () => {
  const a = 1

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Tables / Dashboards" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          { employeesGrid.map((item) => (
            <ColumnDirective key={uniqueId('keyColumnEmployees_')} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}
