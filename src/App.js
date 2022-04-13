import './App.css';
import NavBar from './components/Navbar';
//import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className='espacio'></div>
   {/*<ItemListContainer />*/}
     <ItemDetailContainer />
    </>
  );
}

export default App;
