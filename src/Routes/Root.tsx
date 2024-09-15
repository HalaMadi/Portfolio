import React from 'react'
import MenuAppBar from '../component/AppBar/MenuAppBar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer'
import { Box } from '@mui/material'
const Root:React.FC=()=> {
  return (
    <>
    <MenuAppBar/>
    <Outlet/>
    <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    minHeight: "30vh",
  }}
>  <Footer />
</Box>
    </>
  )
}

export default Root