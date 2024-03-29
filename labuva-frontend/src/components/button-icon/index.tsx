import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@mui/material'
import { Loader } from '../loader'

const Container = styled.div<{
  maxWidth?: string
  width?: string
  margin?: string
  secondary?: boolean
  error?: boolean
}>`
  ${({
    margin = '0',
    secondary,
    error,
    width = '100%',
    theme,
    maxWidth = '200px',
  }) => css`
    width: ${width};
    max-width: ${maxWidth};
    height: 40px;
    margin: ${margin};
    border-radius: 3px;
    border: none;
    background-color: ${theme.button.primary.background};
    color: ${theme.button.primary.color};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1rem;

    & > span {
      margin-left: 8px;
      color: ${theme.button.primary.color};
    }

    & > button {
      color: ${theme.button.primary.color};
      width: 100%;
      height: 100%;
      border-radius: 3px;
      border: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 1rem;
    }

    &:hover {
      background-color: ${theme.button.primary.hover};
    }

    ${(() => {
      if (secondary) {
        return css`
          color: ${theme.button.secondary.color};
          background-color: ${theme.button.secondary.background};

          &:hover {
            background-color: ${theme.button.secondary.hover};
          }

          & > button {
            color: ${theme.button.secondary.color};
          }

          & > span {
            color: ${theme.button.secondary.color};
          }
        `
      }
    })()}

    ${(() => {
      if (error) {
        return css`
          color: ${theme.button.error.color};
          background-color: ${theme.button.error.background};

          &:hover {
            background-color: ${theme.button.error.hover};
          }

          & > button {
            color: ${theme.button.error.color};
          }

          & > span {
            color: ${theme.button.error.color};
          }
        `
      }
    })()}
  `}
`

type TypeButton = 'submit' | 'button'

type Props = {
  children: React.ReactNode
  iconName: string
  margin?: string
  width?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  secondary?: boolean
  error?: boolean
  type?: TypeButton
  isLoading?: boolean
}

export const ButtonIcon = ({
  children,
  width,
  margin,
  onClick,
  secondary,
  error,
  iconName,
  type,
  isLoading,
}: Props) => (
  <Container margin={margin} width={width} secondary={secondary} error={error}>
    {isLoading ? <Loader /> : <Icon>{iconName}</Icon>}
    <button onClick={onClick} type={type}>
      {children}
    </button>
  </Container>
)
