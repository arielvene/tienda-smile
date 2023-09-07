import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MainRouter from './routes/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (

    <div>
<MainRouter/>

<ItemListContainer greeting="bienvenidos a smile..."/>
    </div>

  )

}

export default App
