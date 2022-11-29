import React, { useState, useContext } from 'react'
import { Box, Drawer, AppBar, Toolbar, IconButton } from '@mui/material'

import { Menu as MenuIcon } from '@mui/icons-material'
import { PageList } from './pages-list'
import styled from 'styled-components'
import UserContext from '../../contexts/user'

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const WelcomeMessage = styled.div`
  font-size: 24px;
  color: white;
`

type Props = {
  children: React.ReactNode
}

const drawerWidth = 240

export const Panel = ({ children }: Props) => {
  const { userState } = useContext(UserContext)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = <PageList />

  const container =
    window !== undefined ? () => window.document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <TopBar>
            <WelcomeMessage>
              Bem vindo, {`${userState.name} ${userState.lastname}`}
            </WelcomeMessage>
          </TopBar>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
