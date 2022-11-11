import React from 'react'
import { Card } from '../../components/card'
import styled from 'styled-components'
import { Row } from '../../components/forms'
import { Input } from '../../components/input'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

type LoginInput = {
  email: string
  password: string
}

export const Login = () => {
  const { register } = useForm<LoginInput>()

  return (
    <Container>
      <Card padding="50px 30px" width="70%" maxWidth="600px">
        <Row margin="0 0 24px 0">
          <h1>Login</h1>
        </Row>
        <Input type="email" label="Usuário" {...register('email')} />
        <Input type="password" label="Senha" {...register('password')} />
        <Button margin="16px 0" onClick={() => console.log('logado')}>
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
