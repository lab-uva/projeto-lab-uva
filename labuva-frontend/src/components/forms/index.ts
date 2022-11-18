import styled, { css } from 'styled-components'

type JustifyContentType = 'center' | 'flex-end' | 'flex-start' | 'space-between'
type AlignItemstType = 'center' | 'flex-end' | 'flex-start' | 'space-between'

export const Row = styled.div<{
  margin?: string
  justifyContent?: JustifyContentType
  alignItems?: AlignItemstType
  width?: string
  maxWidth?: string
  wrap?: string
}>`
  ${({
    margin,
    wrap,
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    width = '100%',
    maxWidth = '100%',
  }) => css`
    display: flex;
    ${wrap && `flex-wrap: ${wrap};`}
    justify-content: ${justifyContent};
    align-items: ${alignItems};
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
