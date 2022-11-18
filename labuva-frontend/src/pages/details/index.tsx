import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../components/button'
import { ButtonIcon } from '../../components/button-icon'
import { Column, Row } from '../../components/forms'
import { Color } from '../../components/item-list'
import { NoResultsList } from '../../components/no-results-list'
import { Panel } from '../../layout/panel'
import { dateFormat } from '../../utils/date-formatter'
import { useFetch } from '../_hooks/use-fetch'

const Container = styled.div`
  width: 100%;
  height: auto;

  & > h2 {
    font-weight: 400;
  }
`

type Data = {
  createdAtDate: string
  deliveryDate: string
  id: string
  importanceDegree: string
  schoolWorkDescription: string
  schoolWorkName: string
  workIsDone: boolean
}

export const Details = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const { data, isLoading, error } = useFetch(
    `http://localhost:8080/school-work/${id}`,
    { method: 'GET' },
  )

  if (!data)
    return (
      <Panel>
        <Container>
          <h1>Detalhes</h1>
          <h2>Veja todas as informações sobre esta tarefa</h2>
          <NoResultsList>Nada encontrado.</NoResultsList>
        </Container>
      </Panel>
    )

  const value: Data = data as unknown as Data

  const handleCheckWork = async () => {
    const values = {
      workIsDone: !value.workIsDone,
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

    navigate('/home')
  }

  return (
    <Panel>
      <Container>
        <Column>
          <Row margin="0 0 32px 0" alignItems="center">
            <h1>{value.schoolWorkName}</h1>
            <Color
              importanceDegree={value.importanceDegree}
              top="-15px"
              left="5%"
            />
          </Row>
        </Column>
        <Column>
          <h3>Data final:</h3>
          <p>{dateFormat(value.deliveryDate)}</p>
        </Column>
        <Column margin="24px 0 0 0">
          <h3>Descrição:</h3>
          <Row maxWidth="600px">{value.schoolWorkDescription}</Row>
        </Column>
        <Column margin="24px 0 0 0">
          <h3>Prioridade:</h3>
          <p>{value.importanceDegree}</p>
        </Column>
        <Column margin="16px 0 0 0">
          <h3>Tarefa concluída?</h3>
          <p>{value.workIsDone ? 'Sim' : 'Não'}</p>
        </Column>
        <Column margin="16px 0 0 0">
          <h3>Tarefa criada em:</h3>
          <p>{dateFormat(value.createdAtDate)}</p>
        </Column>
        <Row wrap="wrap">
          <ButtonIcon margin="24px 10px 0 0" iconName="delete" error>
            Apagar
          </ButtonIcon>
          <ButtonIcon
            iconName="check"
            secondary
            margin="24px 10px 0 0"
            onClick={() => handleCheckWork()}
          >
            {value.workIsDone ? 'Desmarcar' : 'Marcar como feito'}
          </ButtonIcon>
          <Button margin="24px 10px 0 0" onClick={() => navigate('/home')}>
            Voltar
          </Button>
        </Row>
      </Container>
    </Panel>
  )
}
