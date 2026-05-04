import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
// import { getLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)

  useEffect(()=>{
const loggedInUser = localStorage.getItem('loggedInUser')

if(loggedInUser){
  const userData = JSON.parse(loggedInUser)
  setUser(userData.role)
  setLoggedInUserData(userData.data || {
      tasks: [],
      taskCounts: {
        newTask: 0,
        completed: 0,
        active: 0,
        failed: 0
      }
    })
}
  },[])

  console.log("LOCAL STORAGE:", localStorage.getItem("loggedInUser"))
  console.log("USERDATA CONTEXT:", userData)
  console.log("LOGGED IN DATA:", loggedInUserData)


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      

        const adminData = {
    role: 'admin',
    data: {
      tasks: [],
      taskCounts: {
        newTask: 0,
        completed: 0,
        active: 0,
        failed: 0
      }
    }
  }
  setUser('admin')
   setLoggedInUserData(adminData.data)
      localStorage.setItem('loggedInUser', JSON.stringify(adminData))
    
    } else if (userData){
      const employee = userData?.find((e) =>
      e.email == email && e.password == password) 
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)

      }
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }))
    }
    else {
      alert('Invalid Credentials')
    }
  }



  return (
    <>
      {
      !user ? (
        <Login handleLogin={handleLogin} /> )
        : user === 'admin' ? (<AdminDashboard changeUser= {setUser} /> 
      ): user === 'employee' ? (<EmployeeDashboard changeUser={setUser} data={loggedInUserData || {task:[], taskCounts:{} }}/>
      ): null
      
    }
    </>
  )
}

export default App