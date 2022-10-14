import React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2c3e50;
  font-size: 13px;
`;

const Label = styled.span``

type InputTypes = 'text' | 'password' | 'email' | 'search'

export type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'css'
> & {
  id?: string
  label?: string
  width?: string
  type: InputTypes
  placeholderValue?: string
}

export const Input = ({id, label, width="100%", type="text", placeholderValue}: Props) => {
	return (
		<div>
			<Label>{label}</Label>
			<InputText
			id={id}
			width={width}
			type={type}
			placeholder={placeholderValue}
			/>
		</div>
)
} 