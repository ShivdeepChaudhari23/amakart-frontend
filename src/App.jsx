import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import ItemsContainer from './Components/ItemsContainer/ItemsContainer';
import Introduction from './Components/Introduction/Introduction';
import { getItems } from './actions/items';
import Navigation from './Components/Navigation/Navigation';


function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <div className='Body-Container'>
        <Introduction />
      </div>
      <ItemsContainer />
    </div>
  );
}

export default App;
