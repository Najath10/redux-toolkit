import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';

function App() {
  return (
    <Fragment>
    <Header/>
    <ProductList/>
    </Fragment>
  );
}

export default App;
