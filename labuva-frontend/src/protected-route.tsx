import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from './contexts/user'

type Props = {
  children: React.ReactElement
}

export const ProtectedRoute = ({ children }: Props) => {
  const { userState } = useContext(UserContext)

  if (!userState.enabled) {
    // user is not authenticated
    return <Navigate to="/" />
  }
  return children
}
