import styled from 'styled-components'
import { ItemList } from '../../components/item-list'
import { Panel } from '../../layout/panel'
import { dateFormat } from '../../utils/date-formatter'
import { useFetch } from '../_hooks/use-fetch'

const Container = styled.div`
  width: 100%;
  height: auto;
`

export const Home = () => {
  const { data, isLoading, error } = useFetch(
    'http://localhost:8080/school-work',
    { method: 'GET' },
  )

  if (!data) return null

  return (
    <Panel>
      <Container>
        {data.map((item) => (
          <ItemList
            key={item.id}
            importanceDegree="none"
            title={item.schoolWorkName}
            finalDate={dateFormat(item.createdAtDate)} // mudar para data final
            description={item.schoolWorkDescription}
          />
        ))}
      </Container>
    </Panel>
  )
}
