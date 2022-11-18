import React, { useRef } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div<{ margin?: string; width?: string }>`
  ${({ margin = '0 0 16px 0', width = '100%' }) => css`
    width: ${width};
    margin: ${margin};
  `}
`

const DatepickerInput = styled.input`
  ${({ theme }) => css`
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 1rem;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: ${theme.textIsActive};
    font-size: 1rem;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  `}
`

const Label = styled.label`
  margin-bottom: 8px;
`

export type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'css'
> & {
  id?: string
  label?: string
  width?: string
  margin?: string
}

export const DatePicker = ({ id, label, width, margin, ...props }: Props) => {
  const innerRef = useRef<HTMLInputElement>(null)

  return (
    <Container width={width} margin={margin}>
      <Label htmlFor={label}>{label}</Label>
      <DatepickerInput ref={innerRef} id={id} type="date" {...props} />
    </Container>
  )
}
