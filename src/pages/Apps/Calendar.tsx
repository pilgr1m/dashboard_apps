import React, { FC } from 'react'
import {
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { scheduleData } from '../../data/dummy'
import { Header } from '../../components'

type Props = {

}

export const Calendar: FC<Props> = () => {
  const a = 1

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Mini Apps" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2022, 7, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}
