import { Home, AddBox } from '@mui/icons-material'
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

const Area = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background-color: ${theme.background};
  `}
`

export const PageList = () => {
  const navigate = useNavigate()

  return (
    <Area>
      <Toolbar>Add logo</Toolbar>
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
      </List>
      <Divider />
    </Area>
  )
}
