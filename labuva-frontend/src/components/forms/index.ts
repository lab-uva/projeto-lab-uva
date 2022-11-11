import styled, { css } from 'styled-components'

type justifyContentType = 'center' | 'flex-end' | 'flex-start' | 'space-between'

export const Row = styled.div<{
  margin?: string
  justifyContent?: justifyContentType
  width?: string
  maxWidth?: string
}>`
  ${({
    margin,
    justifyContent = 'flex-start',
    width = '100%',
    maxWidth = '100%',
  }) => css`
    display: flex;
    justify-content: ${justifyContent};
    width: ${width};
    max-width: ${maxWidth};
    margin: ${margin};
    display: flex;
    flex-direction: row;
  `}
`

export const Column = styled.div<{
  width?: string
  margin?: string
  minHeight?: string
}>`
  ${({ width = '100%', margin = '0', minHeight = 'auto' }) => css`
    width: ${width};
    margin: ${margin};
    min-height: ${minHeight};
    display: flex;
    flex-direction: column;
  `}
`
