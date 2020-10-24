import './App.css';
import React from 'react';
import "bootstrap-4-react/dist/bootstrap-4-react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/detalhes" component={Details} />
          <Route path="/compras" component={Cart} />
          <Route component={Default} />
        </Switch>
      </div> 
    </Router>
  );
}

export default App;