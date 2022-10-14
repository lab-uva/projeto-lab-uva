import React, { useRef } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div<{ margin?: string; width?: string }>`
  ${({ margin = '0 0 16px 0', width = '100%' }) => css`
    width: ${width};
    margin: ${margin};
  `}
`

const InputText = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2c3e50;
  font-size: 1rem;
`

const Label = styled.span``

type InputTypes = 'text' | 'password' | 'email' | 'search'

export type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'css'
> & {
  id?: string
  label?: string
  width?: string
  margin?: string
  type: InputTypes
  placeholderValue?: string
}

export const Input = ({
  id,
  label,
  width,
  margin,
  type = 'text',
  placeholderValue,
}: Props) => {
  const innerRef = useRef<HTMLInputElement>(null)

  return (
    <Container width={width} margin={margin}>
      <Label>{label}</Label>
      <InputText
        ref={innerRef}
        id={id}
        type={type}
        placeholder={placeholderValue}
      />
    </Container>
  )
}
