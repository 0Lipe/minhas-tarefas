import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import BarraLateral from './containers/BarraLateral/BarraLateral'
import ListaDeTarefa from './containers/BarraLateral/ListadeDeTarefas'
import EstiloGlobal, { Container } from './styles'
import Home from './pages/Home'

import store from './store'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
