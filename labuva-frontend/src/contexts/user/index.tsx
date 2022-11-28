import React, { createContext, Dispatch, useState } from 'react'

export type UserState = {
  accountNonExpired: boolean
  accountNonLocked: boolean
  authorities: { authority: string }[]
  authority: string
  credentialsNonExpired: boolean
  enabled: boolean
  password: string
  role: string
  userId: string
  username: string
}

type UserContextProps = {
  userState: UserState
  setUser: Dispatch<React.SetStateAction<UserState>>
  userPass: string
  setPass: Dispatch<React.SetStateAction<string>>
  clearUserContext: () => void
}

const defaultValues = {
  accountNonExpired: false,
  accountNonLocked: false,
  authorities: [{ authority: '' }],
  authority: '',
  credentialsNonExpired: false,
  enabled: false,
  password: '',
  role: '',
  userId: '',
  username: '',
}

const UserContext = createContext<UserContextProps>({
  userState: defaultValues,
  setUser: () => {},
  userPass: '',
  setPass: () => {},
  clearUserContext: () => {},
})

type Props = {
  children: React.ReactNode
}

const UserContextProvider = ({ children }: Props) => {
  const [userState, setUser] = useState<UserState>(defaultValues)
  const [userPass, setPass] = useState('')

  const clearUserContext = () => setUser(defaultValues)

  return (
    <UserContext.Provider
      value={{ userState, setUser, userPass, setPass, clearUserContext }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider }
export default UserContext
