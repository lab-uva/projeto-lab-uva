import { useState, useContext, useEffect } from 'react'
import { Card } from '../../components/card'
import styled from 'styled-components'
import { Row } from '../../components/forms'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Link, useNavigate } from 'react-router-dom'
import { encode } from 'base-64'
import UserContext, { UserState } from '../../contexts/user'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Login = () => {
  const { setUser, userState, setPass } = useContext(UserContext)
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [auth, setAuth] = useState(false)

  const onSubmit = async () => {
    try {
      await fetch('http://localhost:8080/user/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${encode(username + ':' + password)}`,
        },
      }).then(async (response) => {
        const json: UserState = await response.json()
        localStorage.setItem('user', JSON.stringify(json))

        setUser({
          accountNonExpired: json.accountNonExpired,
          accountNonLocked: json.accountNonExpired,
          authorities: json.authorities,
          authority: json.authority,
          credentialsNonExpired: json.credentialsNonExpired,
          enabled: json.enabled,
          password: '',
          role: json.role,
          userId: json.userId,
          username: json.username,
        })

        const status = response.status

        if (status === 200) {
          setAuth(true)
          setPass(password)
        } else {
          setError(true)
        }
      })
    } catch (error) {
      setError(true)
      console.error('error: login blocked.')
    }
  }

  useEffect(() => {
    if (userState.enabled) {
      navigate('/home')
    }
  }, [auth])

  return (
    <Container>
      <Card padding="50px 30px" width="70%" maxWidth="600px">
        <Row margin="0 0 24px 0">
          <h1>Login</h1>
        </Row>
        <Input
          type="text"
          label="Usuário"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          errorMessage="Usuário ou senha inválido."
          hasError={error ? true : false}
        />
        <Input
          type="password"
          label="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button margin="16px 0" onClick={() => onSubmit()}>
          Fazer login
        </Button>
        <Row justifyContent="center">
          <p>
            Não tem conta? <Link to="/signup">Crie uma grátis</Link>
          </p>
        </Row>
      </Card>
    </Container>
  )
}
