import React from 'react'
import ScheduleTable from '../components/ScheduleTable'

const SchedulePage = ({list}) => { 
  return (
    <div id='schedule'>
    <ScheduleTable list={list}/>
    </div>
  )
}

export default SchedulePage