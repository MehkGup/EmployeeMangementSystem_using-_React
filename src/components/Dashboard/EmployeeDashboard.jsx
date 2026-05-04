import React from 'react'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import Headers from '../others/Headers'

const EmployeeDashboard = (props) => {
  console.log(" Admin data", props.data)
  return (
    <div className='p-10  bg-[#1C1C1C] h-screen'>
            <Headers changeUser={props.changeUser} data={props.data} />
            <TaskListNumbers data={props.data} />
            
            <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard