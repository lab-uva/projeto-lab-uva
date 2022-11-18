import { useState } from 'react'
import styled from 'styled-components'
import { ButtonIcon } from '../../components/button-icon'
import { ItemList } from '../../components/item-list'
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

export const Home = () => {
  const [isDone, setIsDone] = useState<boolean>()

  const { data, isLoading, error } = useFetch(
    'http://localhost:8080/school-work',
    { method: 'GET' },
    isDone,
  )

  if (!data?.length)
    return (
      <Panel>
        <Container>
          <h1>Home</h1>
          <h2>Próximos trabalhos</h2>
          <NoResultsList>Nada encontrado.</NoResultsList>
        </Container>
      </Panel>
    )

  return (
    <Panel>
      <Container>
        <h1>Home</h1>
        <h2>Próximos trabalhos</h2>
        {data.map((item) => (
          <ItemList
            margin="24px 0 0 0"
            key={item.id}
            importanceDegree={item.importanceDegree}
            title={item.schoolWorkName}
            finalDate={dateFormat(item.deliveryDate)} // mudar para data final
            description={item.schoolWorkDescription}
            id={item.id}
            workIsDone={item.workIsDone}
            setIsDone={setIsDone}
          />
        ))}
      </Container>
    </Panel>
  )
}
