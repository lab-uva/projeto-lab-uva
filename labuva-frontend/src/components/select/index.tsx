import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const SelectComponent = styled(Select)`
  &::focus {
    border: 2px solid black;
  }
`

const Label = styled.label`
  margin-bottom: 8px;
`

const customStyle = {
  control: (base: any) => ({
    ...base,
    border: '1px solid #ccc',
    boxShadow: 'none',
  }),
}

type Option = {
  value: string
  label: string
}

type Props = {
  options: Option[]
  defaultValue?: Option
  label?: string
}

export const SelectOne = ({ options, defaultValue, label }: Props) => (
  <>
    <Label htmlFor={label}>{label}</Label>
    <SelectComponent
      options={options}
      styles={customStyle}
      defaultValue={defaultValue}
    />
  </>
)
