import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoutes = ({token}) => {
  return (
    token ? <Outlet /> : <Navigate to="/sign_in" />
  )
}

export default PrivateRoutes