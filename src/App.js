import "bulma/css/bulma.css"
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";

function App (){
 return (
    <div>
        <NavBar/>
        <ItemListContainer greeting="Carrito en construccion, disculpe las molestias ocasionadas." />
    </div>
 )
}
export default App;