import styled, { css } from 'styled-components'

type justifyContentType = 'center' | 'flex-end' | 'flex-start' | 'space-between'

export const Row = styled.div<{
  margin?: string
  justifyContent?: justifyContentType
}>`
  ${({ margin, justifyContent = 'flex-start' }) => css`
    display: flex;
    justify-content: ${justifyContent};
    width: 100%;
    margin: ${margin};
    display: flex;
    flex-direction: row;
  `}
`

export const Column = styled.div<{ width?: string }>`
  ${({ width = '100%' }) => css`
    width: ${width};
    display: flex;
    flex-direction: column;
  `}
`
