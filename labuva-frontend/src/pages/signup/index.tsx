import { useState } from 'react'
import { Card } from '../../components/card'
import styled from 'styled-components'
import { Row } from '../../components/forms'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Signup = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState<any[] | null>(null)
  const [error, setError] = useState(false)

  const onSubmit = async () => {
    const values = {
      username,
      password,
    }

    await fetch('http://localhost:8080/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(async (response) => {
      const json = await response.json()
      setData(json)
      const status = response.status

      status === 201 ? navigate('/') : setError(true)
    })
  }

  return (
    <Container>
      <Card padding="50px 30px" width="70%" maxWidth="600px">
        <Row margin="0 0 24px 0">
          <h1>Crie uma conta</h1>
        </Row>
        <Input
          type="text"
          label="Usuário"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          errorMessage="Usuário em uso. Escolha um nome diferente."
          hasError={error ? true : false}
        />
        <Input
          type="password"
          label="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button
          margin="16px 0"
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            onSubmit()
          }}
        >
          Criar conta
        </Button>
        <Button secondary onClick={() => navigate('/')}>
          Voltar
        </Button>
      </Card>
    </Container>
  )
}
