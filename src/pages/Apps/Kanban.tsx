import React, { FC } from 'react'
import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../../data/dummy'
import { Header } from '../../components'
import { uniqueId } from 'lodash'

type Props = {

}

export const Kanban: FC<Props> = () => {
  const a = 1

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Mini Apps" title="Kanban" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map(item => (
            <ColumnDirective key={uniqueId('KeyKanban_')} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}
