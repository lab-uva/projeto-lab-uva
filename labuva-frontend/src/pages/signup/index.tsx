import React from 'react'
import { Card } from '../../components/card'
import styled from 'styled-components'
import { Row } from '../../components/forms'
import { Input } from '../../components/input'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/button'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

type LoginInput = {
  name: string
  email: string
  password: string
}

export const Signup = () => {
  const navigate = useNavigate()
  const { register } = useForm<LoginInput>()

  return (
    <Container>
      <Card padding="50px 30px" width="70%">
        <Row margin="0 0 24px 0">
          <h1>Crie uma conta</h1>
        </Row>
        <Input type="text" label="Nome" {...register('name')} />
        <Input type="email" label="E-mail" {...register('email')} />
        <Input type="password" label="Senha" {...register('password')} />
        <Button margin="16px 0" onClick={() => console.log('logado')}>
          Criar conta
        </Button>
        <Button secondary onClick={() => navigate('/')}>
          Voltar
        </Button>
      </Card>
    </Container>
  )
}
