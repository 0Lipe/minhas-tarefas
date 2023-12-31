import BotaoAdcionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral/BarraLateral'
import ListaDeTarefa from '../../containers/BarraLateral/ListadeDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefa />
    <BotaoAdcionar />
  </>
)

export default Home
