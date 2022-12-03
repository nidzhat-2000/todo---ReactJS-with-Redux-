import { useSelector } from 'react-redux';
import AddingItem from './components/AddingItem';
import Header from './components/Header';
import List from './components/List';
import Popup from './components/Popup';
import Bootstrap from './components/Bootstrap';

function App() {
  const { opened } = useSelector(state => state.modal);
  console.log(opened);

  return (
    <div className="App">
      {opened && <Popup />}
      {/* {opened && <div className=""> <h2>Okay</h2></div> } */}
      <Header />
      <AddingItem />
      <List />
      {/* <Bootstrap /> */}
    </div>
  );
}

export default App;
