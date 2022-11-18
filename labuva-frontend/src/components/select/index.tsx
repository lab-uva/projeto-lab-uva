import React from 'react'
import Select, { SetValueAction } from 'react-select'
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
  option: (provided: any) => ({
    ...provided,
    color: '#999999',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#999999',
  }),
}

export type Option = {
  value: string
  label: string
}

type Props = {
  options: Option[]
  defaultValue?: Option
  label?: string
  onChange(selected: any): void
  value?: Option
}

export const SelectOne = ({
  options,
  defaultValue,
  label,
  onChange,
  value,
  ...props
}: Props) => (
  <>
    <Label htmlFor={label}>{label}</Label>
    <SelectComponent
      {...props}
      onChange={onChange}
      value={value}
      options={options}
      styles={customStyle}
      defaultValue={defaultValue}
    />
  </>
)
