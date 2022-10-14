import styled, { css } from 'styled-components';

export const Row = styled.div<{ margin?: string }>`
${({ margin }) => css`
width: 100%;
margin: ${margin};
display: flex;
flex-direction: row;
`}
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
