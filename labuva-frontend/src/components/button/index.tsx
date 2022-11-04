import React from 'react'
import styled, { css } from 'styled-components'

const ButtonStyle = styled.button<{ margin?: string; secondary?: boolean }>`
  ${({ margin = '0', secondary, theme }) => css`
    width: 100%;
    height: 40px;
    margin: ${margin};
    padding: 20px 30px;
    border-radius: 3px;
    border: none;
    background-color: ${theme.button.primary.background};
    color: ${theme.button.primary.color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: ${theme.button.primary.hover};
    }

    ${(() => {
      if (secondary) {
        return css`
          color: ${theme.button.secondary.color};
          background-color: ${theme.button.secondary.background};

          &:hover {
            color: ${theme.button.secondary.color};
            background-color: ${theme.button.secondary.hover};
          }
        `
      }
    })()}
  `}
`

type Props = {
  children: React.ReactNode
  margin?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  secondary?: boolean
}

export const Button = ({ children, margin, onClick, secondary }: Props) => (
  <ButtonStyle margin={margin} onClick={onClick} secondary={secondary}>
    {children}
  </ButtonStyle>
)
