import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../components/button'
import { ButtonIcon } from '../../components/button-icon'
import { Column, Row } from '../../components/forms'
import { NoResultsList } from '../../components/no-results-list'
import UserContext from '../../contexts/user'
import { Panel } from '../../layout/panel'

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

export const UserDetails = () => {
  const navigate = useNavigate()
  const { userState } = useContext(UserContext)

  return (
    <Panel>
      <Container>
        <Column>
          <Row margin="0 0 32px 0" alignItems="center">
            <h1>{`${userState.name} ${userState.lastname}`}</h1>
          </Row>
        </Column>
        <Column>
          <h3>Universidade:</h3>
          <p>{userState.university}</p>
        </Column>
        <Column margin="24px 0 0 0">
          <h3>Email:</h3>
          <Row maxWidth="600px">{userState.email}</Row>
        </Column>
        <Column margin="16px 0 0 0">
          <h3>Id:</h3>
          <p>{userState.userId}</p>
        </Column>
        <Row>
          <Button margin="24px 10px 0 0" onClick={() => navigate('/home')}>
            Voltar
          </Button>
        </Row>
      </Container>
    </Panel>
  )
}
