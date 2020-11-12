<<<<<<< HEAD
import React, { Component } from 'react';
import Product from "./Products";
import Title from './Title';
import { ConsumidorProduto } from '../context';

export default class ProductList extends Component {
    render() {
      return (
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="our" title="products" />
              
              <div className="row">
                <ConsumidorProduto>
                  {value => {
                    return value.products.map( produto => {
                      return <Product key={produto.id} produto={produto} />;
                    });
                  }} 
                </ConsumidorProduto>
              </div>
            </div>
          </div>
        </React.Fragment>    
      );
=======
import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>Lista de Produtos</h3>
            </div>
        )
>>>>>>> 1ba7a81385445366745f7783448c8a8aafcdc634
    }
}