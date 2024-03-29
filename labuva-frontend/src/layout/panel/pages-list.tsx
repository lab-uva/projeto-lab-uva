import { useContext } from 'react'
import {
  Home,
  AddBox,
  ExitToApp,
  Person,
  MoodRounded,
} from '@mui/icons-material'
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from '@mui/material'
import styled, { css } from 'styled-components'
import { pagesLinks } from './pages-links'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/user'
import ThemeContext from '../../contexts/theme'

const Area = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background-color: ${theme.background};
  `}
`

const Logo = styled.h3`
  font-size: 32px;
  color: #1976d2;
`

export const PageList = () => {
  const { themeState, setTheme } = useContext(ThemeContext)
  const { clearUserContext } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    clearUserContext()
    navigate('/')
  }

  return (
    <Area>
      <Toolbar>
        <Logo>Labuva</Logo>
      </Toolbar>
      <Divider />
      <List>
        <ListItem key={pagesLinks[0].page} disablePadding>
          <ListItemButton onClick={() => navigate('/home')}>
            <ListItemIcon>
              <Home color="primary" />
            </ListItemIcon>
            <p>{pagesLinks[0].page}</p>
          </ListItemButton>
        </ListItem>

        <ListItem key={pagesLinks[1].page} disablePadding>
          <ListItemButton onClick={() => navigate('/create-homework')}>
            <ListItemIcon>
              <AddBox color="primary" />
            </ListItemIcon>
            <p>{pagesLinks[1].page}</p>
          </ListItemButton>
        </ListItem>

        <ListItem key={pagesLinks[2].page} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate('/user')
            }}
          >
            <ListItemIcon>
              <Person color="primary" />
            </ListItemIcon>
            <p>{pagesLinks[2].page}</p>
          </ListItemButton>
        </ListItem>

        <ListItem key={pagesLinks[3].page} disablePadding>
          <ListItemButton
            onClick={() => {
              setTheme(!themeState)
            }}
          >
            <ListItemIcon>
              <MoodRounded color="primary" />
            </ListItemIcon>
            <p>{pagesLinks[3].page}</p>
          </ListItemButton>
        </ListItem>

        <ListItem key={pagesLinks[4].page} disablePadding>
          <ListItemButton
            onClick={() => {
              handleLogout()
            }}
          >
            <ListItemIcon>
              <ExitToApp color="primary" />
            </ListItemIcon>
            <p>{pagesLinks[4].page}</p>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Area>
  )
}
