import React from 'react'
import styled from 'styled-components'
import { ItemList } from '../../components/item-list'

const Container = styled.div`
  width: 85vw;
  max-width: 900px;
  height: 1000px;
  padding: 1rem;
`

export const Home = () => {
  return (
    <Container>
      <ItemList
        importanceDegree="none"
        title="Título do trabalho 1"
        finalDate="05/11/2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in elit nec neque maximus euismod. Quisque blandit libero nec mollis gravida. Sed faucibus dictum dolor."
      />
      <ItemList
        importanceDegree="low"
        title="Título do trabalho 2"
        finalDate="10/11/2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in elit nec neque maximus euismod. Quisque blandit libero nec mollis gravida. Sed faucibus dictum dolor."
      />
      <ItemList
        importanceDegree="medium"
        title="Título do trabalho 3"
        finalDate="07/12/2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in elit nec neque maximus euismod. Quisque blandit libero nec mollis gravida. Sed faucibus dictum dolor."
      />
      <ItemList
        importanceDegree="high"
        title="Título do trabalho 4"
        finalDate="13/12/2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in elit nec neque maximus euismod. Quisque blandit libero nec mollis gravida. Sed faucibus dictum dolor."
      />
      <ItemList
        importanceDegree="ultra"
        title="Título do trabalho 5"
        finalDate="01/12/2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in elit nec neque maximus euismod. Quisque blandit libero nec mollis gravida. Sed faucibus dictum dolor."
      />
    </Container>
  )
}
