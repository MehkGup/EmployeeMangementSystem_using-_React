import React from 'react'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import Headers from '../others/Headers'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Headers changeUser={props.changeUser}/>
           <CreateTask/>
           <AllTask/>
        </div>
    )
}

export default AdminDashboard