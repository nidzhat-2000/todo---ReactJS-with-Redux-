import { useSelector } from 'react-redux';
import AddingItem from './components/AddingItem';
import Header from './components/Header';
import List from './components/List';
import Popup from './components/Popup';

function App() {
  const { opened } = useSelector(state => state.modal);
  console.log(opened);

  return (
    <div className="App">
      {opened && <Popup />}
      <Header />
      <AddingItem />
      <List />
    </div>
  );
}

export default App;
