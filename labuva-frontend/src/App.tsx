import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import GlobalStyle from './styles/global.css'
import OneSignal from 'react-onesignal'

import { UserContextProvider } from './contexts/user'
import { router } from './pages/routes'
import { ThemeContextProvider } from './contexts/theme'

const App = () => {
  const [test, setTest] = useState(true) // implementar oneSignal

  useEffect(() => {
    OneSignal.init({
      appId: '8c7467db-b7b7-4275-a34d-af875f5c2922',
    })
  }, [])

  useEffect(() => {
    if (test) {
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          Authorization:
            'Basic ODEyZjYxN2YtZmJmYi00MTE5LTlhODQtYmM2YzVjODY0YWFk',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          filters: [
            {
              field: 'tag',
              key: 'email',
              relation: '=',
              value: 'email@gmail.com', // implementar oneSignal
            },
          ],
          contents: {
            en: 'O prazo de alguma tarefa está chegando! Abra o app e verifique.',
          },
          name: 'Notificacao_prox_prazo',
          app_id: '8c7467db-b7b7-4275-a34d-af875f5c2922',
        }),
      }

      fetch('https://onesignal.com/api/v1/notifications', options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    }
  }, [])

  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </UserContextProvider>
    </ThemeContextProvider>
  )
}

export default App
