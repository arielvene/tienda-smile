import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
const App = () => {

  return (

    <div>
<NavBarComponent/>

<ItemListContainer greeting="bienvenidos a smile..."/>
    </div>

  )

}

export default App
