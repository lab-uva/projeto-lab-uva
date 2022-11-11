import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div<{
  width?: string
  margin?: string
  maxWidth?: string
  padding?: string
}>`
  ${({ width = '80%', maxWidth, padding = '1rem', theme, margin }) => css`
    width: ${width};
    ${margin && `margin: ${margin};`}
    ${maxWidth && `max-width: ${maxWidth};`}
    height: auto;
    padding: ${padding};
    display: flex;
    flex-direction: column;
    background-color: ${theme.card.background};
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
  `}
`

type Props = {
  children: ReactNode
  width?: string
  margin?: string
  maxWidth?: string
  padding?: string
}

export const Card = ({ children, width, maxWidth, padding, margin }: Props) => (
  <Container
    width={width}
    padding={padding}
    maxWidth={maxWidth}
    margin={margin}
  >
    {children}
  </Container>
)
