import React from 'react'
import MenuAppBar from '../component/AppBar/MenuAppBar'
import { Outlet } from 'react-router-dom'
const Root:React.FC=()=> {
  return (
    <>
    <MenuAppBar/>
    <Outlet/>
    </>
  )
}

export default Root