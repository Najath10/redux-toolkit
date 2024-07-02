import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect } from 'react';
import {ProductList,Header} from './components';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchUser())
  },[])
  return (
    <Fragment>
    <Header/>
    <ProductList/>
    </Fragment>
  );
}

export default App;
