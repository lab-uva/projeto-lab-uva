import styled from 'styled-components'
import { ItemList } from '../../components/item-list'
import { dateFormat } from '../../utils/date-formatter'
import { useFetch } from '../_hooks/use-fetch'

const Container = styled.div`
  width: 85vw;
  max-width: 900px;
  height: 1000px;
  padding: 1rem;
`

export const Home = () => {
  const { data, isLoading, error } = useFetch(
    'http://localhost:8080/school-work',
  )

  if (!data) return null

  return (
    <Container>
      {data.map((item) => (
        <ItemList
          importanceDegree="none"
          title={item.schoolWorkName}
          finalDate={dateFormat(item.createdAtDate)} // mudar para data final
          description={item.schoolWorkDescription}
        />
      ))}
    </Container>
  )
}
