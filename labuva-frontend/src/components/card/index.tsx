import React, { ReactNode } from 'react';
import styled, { css} from 'styled-components';

const Container = styled.div<{ width?: string; maxWidth?: string; padding?: string}>`
${({ width="80%", maxWidth="600px", padding="1rem"}) => css`
  width: ${width};
  max-width: ${maxWidth};
  height: auto;
  padding: ${padding};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.68);
  border-radius: 1rem;
`}
`;

type Props = {
  children: ReactNode,
  width?: string
  maxWidth?: string
  padding?: string
};

export const Card = ({ children, width, maxWidth, padding }: Props) => {
  return <Container width={width} padding={padding} maxWidth={maxWidth}>{children}</Container>;
};
