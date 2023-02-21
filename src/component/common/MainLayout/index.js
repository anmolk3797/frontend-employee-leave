import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './navbar'
import Sidebar from './sidebar'




const MainLayout = () => {
  return (
    <>
      <Navbar/>
      {/* <Sidebar/> */}
      <Outlet/>
    </>
  )
}

export default MainLayout
