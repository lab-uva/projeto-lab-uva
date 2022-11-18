import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useFetch } from '../../pages/_hooks/use-fetch'
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

export const Color = styled.div<{
  importanceDegree: string
  left?: string
  top?: string
}>`
  ${({ theme, importanceDegree = 'none', left = '90%', top = '5%' }) => css`
    width: 30px;
    height: 30px;
    background-color: ${theme.importanceDegree.none};
    border-radius: 50%;
    position: relative;
    left: ${left};
    top: ${top};
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
  id: string
  workIsDone: boolean
  setIsDone: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const ItemList = ({
  id,
  margin,
  importanceDegree = 'none',
  title,
  description,
  finalDate,
  workIsDone,
  setIsDone,
}: Props) => {
  const navigate = useNavigate()

  const handleCheckWork = async () => {
    const values = {
      workIsDone: !workIsDone,
    }

    await fetch(`http://localhost:8080/school-work/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(async (response) => {
        const json = await response.json()
      })
      .catch((error) => {})
      .finally(() => {})

    setIsDone(workIsDone)
  }

  return (
    <Container margin={margin}>
      <Color importanceDegree={importanceDegree} />
      <Column minHeight="100px">
        <Row>
          <Column>
            {workIsDone ? (
              <s>
                <h2>{title}</h2>
              </s>
            ) : (
              <h2>{title}</h2>
            )}
            <p>Data final: {finalDate}</p>
          </Column>
        </Row>
        <Row margin="16px 0">
          <p>{description}</p>
        </Row>
      </Column>
      <Row justifyContent="flex-end">
        <Button onClick={() => navigate(`/details/${id}`)}>Ver detalhes</Button>
        <ButtonIcon
          secondary
          iconName="check"
          margin="0 0 0 8px"
          onClick={() => handleCheckWork()}
        >
          {workIsDone ? 'Desmarcar' : 'Marcar como feito'}
        </ButtonIcon>
      </Row>
    </Container>
  )
}
