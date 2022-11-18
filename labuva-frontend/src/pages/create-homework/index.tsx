import { useState } from 'react'
import styled from 'styled-components'
import { Card } from '../../components/card'
import { Input } from '../../components/input'
import { Textarea } from '../../components/textarea'
import { Panel } from '../../layout/panel'
import { SelectOne, Option } from '../../components/select'
import { ButtonIcon } from '../../components/button-icon'
import { Row } from '../../components/forms'
import { DatePicker } from '../../components/datepicker'
import { dateFormat } from '../../utils/date-formatter'
import { useNavigate } from 'react-router-dom'

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

const importanceOptions: Option[] = [
  { value: 'none', label: 'Nenhum' },
  { value: 'low', label: 'Baixo' },
  { value: 'medium', label: 'Médio' },
  { value: 'high', label: 'Alto' },
  { value: 'ultra', label: 'Muito alto' },
]

export const CreateHomework = () => {
  const navigate = useNavigate()

  const [deliveryDate, setDeliveryDate] = useState('')
  const [schoolWorkName, setSchoolWorkName] = useState('')
  const [schoolWorkDescription, setSchoolWorkDescription] = useState('')
  const [importanceDegree, setImportanceDegree] = useState<Option>()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<any[] | null>(null)
  const [error, setError] = useState(null)

  const onSubmit = async () => {
    const date = dateFormat(
      new Date(
        new Date().setDate(new Date(deliveryDate).getDate() + 1),
      ).toISOString(),
    )

    const values = {
      schoolWorkName,
      schoolWorkDescription,
      deliveryDate: date,
      importanceDegree: importanceDegree?.value,
    }

    await fetch('http://localhost:8080/school-work', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(async (response) => {
        const json = await response.json()
        setData(json)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })

    navigate('/home')
  }

  return (
    <Panel>
      <Container>
        <h1>Criar trabalho</h1>
        <h2>Adicione uma nova tarefa</h2>
        <FormArea
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
          }}
        >
          <Card width="100%">
            <Input
              type="text"
              label="Título da tarefa"
              value={schoolWorkName}
              onChange={({ target }) => setSchoolWorkName(target.value)}
            />
            <Textarea
              label="Descrição"
              value={schoolWorkDescription}
              onChange={({ target }) => setSchoolWorkDescription(target.value)}
            />
            <DatePicker
              label="Data de entrega"
              value={deliveryDate}
              onChange={({ target }) => setDeliveryDate(target.value)}
            />
            <SelectOne
              label="Grau de importância"
              options={importanceOptions}
              value={importanceDegree}
              onChange={(selected) => setImportanceDegree(selected)}
            />
          </Card>
          <Row justifyContent="flex-end">
            <ButtonIcon
              isLoading={!isLoading}
              margin="32px 0"
              iconName="send"
              type="submit"
            >
              Enviar
            </ButtonIcon>
          </Row>
        </FormArea>
      </Container>
    </Panel>
  )
}
