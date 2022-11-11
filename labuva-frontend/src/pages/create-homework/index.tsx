import { useState } from 'react'
import styled from 'styled-components'
import { Card } from '../../components/card'
import { Input } from '../../components/input'
import { Textarea } from '../../components/textarea'
import { Panel } from '../../layout/panel'
import { SelectOne } from '../../components/select'
import { ButtonIcon } from '../../components/button-icon'
import { Row } from '../../components/forms'
import { Button } from '../../components/button'

const Container = styled.div`
  width: 100%;
  height: auto;

  & > h2 {
    font-weight: 400;
    margin-bottom: 32px;
  }
`

const FormArea = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Label = styled.label`
  margin-bottom: 8px;
`

export const CreateHomework = () => {
  const importanceOptions = [
    { value: 'none', label: 'Nenhum' },
    { value: 'low', label: 'Baixo' },
    { value: 'medium', label: 'Médio' },
    { value: 'high', label: 'Alto' },
    { value: 'ultra', label: 'Muito alto' },
  ]

  return (
    <Panel>
      <Container>
        <h1>Criar trabalho</h1>
        <h2>Adicione uma nova tarefa</h2>
        <FormArea>
          <Card width="100%">
            <Input type="text" label="Título da tarefa" />
            <Textarea id="description" label="Descrição" />
            <Input type="date" label="Data de entrega" />
            <SelectOne
              label="Grau de importância"
              options={importanceOptions}
              defaultValue={importanceOptions[0]}
            />
          </Card>
          <Row justifyContent="flex-end">
            <ButtonIcon margin="32px 0" iconName="send">
              Enviar
            </ButtonIcon>
          </Row>
        </FormArea>
      </Container>
    </Panel>
  )
}
