import React, { Children, ReactNode } from 'react'
import styled, { css } from 'styled-components'

const ButtonStyle = styled.button<{ margin?: string }>`
  ${({ margin = '0' }) => css`
    width: 100%;
    margin: ${margin};
    padding: 20px 30px;
    border-radius: 3px;
    border: none;
    background-color: #029602;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #046e04;
    }
  `}
`

type Props = {
  children: React.ReactNode
  margin?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button = ({ children, margin, onClick }: Props) => (
  <ButtonStyle margin={margin} onClick={onClick}>
    {children}
  </ButtonStyle>
)
