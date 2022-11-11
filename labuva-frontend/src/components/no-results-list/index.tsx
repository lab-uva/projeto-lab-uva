import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../button'
import { Column, Row } from '../forms'

const Container = styled.div<{ margin?: string }>`
  ${({ margin = '32px 0 0 0', theme }) => css`
    margin: ${margin};
    height: auto;
    padding: 1.5rem 1rem;
    border-radius: 1rem;
    background-color: ${theme.card.background};
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.68);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 0.8rem;
    }
  `}
`

type Props = {
  margin?: string
  children: string
}

export const NoResultsList = ({ margin, children }: Props) => {
  return <Container margin={margin}>{children}</Container>
}
