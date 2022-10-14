import React, { useState } from 'react'
import { Card } from '../../components/card'
import styled from 'styled-components'
import { Row } from '../../components/forms'
import { Input } from '../../components/input'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/button'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

type LoginInput = {
  email: string
  password: string
}

export const Login = () => {
  const { register } = useForm<LoginInput>()

  return (
    <Container>
      <Card padding="50px 30px">
        <Row margin="0 0 24px 0">
          <h1>Login</h1>
        </Row>
        <Input type="email" label="Usuário" {...register('email')} />
        <Input type="password" label="Senha" {...register('password')} />
        <Button margin="16px 0" onClick={() => console.log('logado')}>
          Fazer login
        </Button>
        <Button secondary margin="16px 0" onClick={() => console.log('logado')}>
          Criar conta
        </Button>
      </Card>
    </Container>
  )
}
