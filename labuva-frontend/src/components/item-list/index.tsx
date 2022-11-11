import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../button'
import { ButtonIcon } from '../button-icon'
import { Column, Row } from '../forms'

const Container = styled.div<{ margin?: string }>`
  ${({ margin = '32px 0 0 0', theme }) => css`
    margin: ${margin};
    min-height: 150px;
    height: auto;
    padding: 1.5rem 1rem;
    border-radius: 1rem;
    background-color: ${theme.card.background};
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.68);
    border-radius: 1rem;

    h2 {
      font-size: 0.95rem;
      margin-bottom: 5px;
    }

    p {
      font-size: 0.8rem;
    }
  `}
`

const Color = styled.div<{ importanceDegree: string }>`
  ${({ theme, importanceDegree = 'none' }) => css`
    width: 30px;
    height: 30px;
    background-color: ${theme.importanceDegree.none};
    border-radius: 50%;
    position: relative;
    left: 90%;
    top: 5%;
    margin-bottom: -32px;

    ${importanceDegree === 'none' &&
    css`
      background-color: ${theme.importanceDegree.none};
    `}

    ${importanceDegree === 'low' &&
    css`
      background-color: ${theme.importanceDegree.low};
    `}

    ${importanceDegree === 'medium' &&
    css`
      background-color: ${theme.importanceDegree.medium};
    `}

    ${importanceDegree === 'high' &&
    css`
      background-color: ${theme.importanceDegree.high};
    `}

    ${importanceDegree === 'ultra' &&
    css`
      background-color: ${theme.importanceDegree.ultra};
    `}
  `}
`

type importanceType = 'none' | 'low' | 'medium' | 'high' | 'ultra'

type Props = {
  margin?: string
  importanceDegree?: importanceType
  title?: string
  description?: string
  finalDate?: string
}

export const ItemList = ({
  margin,
  importanceDegree = 'none',
  title,
  description,
  finalDate,
}: Props) => {
  return (
    <Container margin={margin}>
      <Color importanceDegree={importanceDegree} />
      <Column minHeight="100px">
        <Row>
          <Column>
            <h2>{title}</h2>
            <p>Data final: {finalDate}</p>
          </Column>
        </Row>
        <Row margin="16px 0">
          <p>{description}</p>
        </Row>
      </Column>
      <Row justifyContent="flex-end">
        <Button>Ver detalhes</Button>
        <ButtonIcon secondary iconName="check" margin="0 0 0 8px">
          Marcar como feito
        </ButtonIcon>
      </Row>
    </Container>
  )
}
