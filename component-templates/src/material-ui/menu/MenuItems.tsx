import React from 'react'
import { useNavigate, matchPath, useLocation } from 'react-router-dom'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material'

interface MenuItem {
  className: string
  href: string
  title: string
  icon: string
  label: string
  codeHref?: string
  codeIcon?: string
}

interface MenuItemStructure {
  items: MenuItem[]
}

export const MenuItems: React.FC<MenuItemStructure> = ({
  items,
}: MenuItemStructure) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const theme = useTheme()
  const active = (path) =>
    path ? !!matchPath({ path, end: false }, pathname) : false

  const generatedHref = (item: MenuItem, isActiveRoot: boolean) => {
    if (item.codeHref && item.codeIcon) {
      return (
        <ListItemButton
          onClick={() => navigate(item.codeHref)}
        >
          <ListItemIcon>
            <item.codeIcon
              color={
                isActiveRoot
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary
              }
              size="20"
            />
          </ListItemIcon>
        </ListItemButton>
      )
    }
  }

  return (
    <>
      {items.map((item) => {
        const isActiveRoot = active(item.href) || active(item.codeHref)
        return (
          <ListItem key={item.title}
            style={{
              cursor: 'pointer',
              borderRadius: '20px',
              color: isActiveRoot
                ? theme.palette.primary.contrastText
                : theme.palette.text.primary,
              background: isActiveRoot && theme.palette.primary.main,
            }}>
            <ListItemButton
              onClick={() => navigate(item.href)}
            >
              <ListItemIcon>
                <item.icon
                  color={
                    isActiveRoot
                      ? theme.palette.primary.contrastText
                      : theme.palette.text.primary
                  }
                  size="20"
                />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
            {generatedHref(item, isActiveRoot)}
          </ListItem>
        )
      })}
    </>
  )
}
