import React, { Component } from 'react';
import { produtosEstoque , produtosDetalhes } from './data';
/* Context é usado para compartilhar dados "globais" 
    para ma árvore de componentes do React. */
const ContextProduto = React.createContext();

class ProductProvider extends Component {

  state = {
    produtos: produtosEstoque, 
    produtosDetalhes: produtosDetalhes
  }

  handleDetail = () => {
    console.log('veja os detalhes');
  }
  
  addToCard = () => {
    console.log('para o carrinho de compras');
  }

    render() {
      return (
        <ContextProduto.Provider 
          value={{
            // produtos: this.state.produtos
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart
          }}>
            {this.props.children}  
        </ContextProduto.Provider>
      )
    }
}

const ConsumidorProduto = ContextProduto.Consumer;

export { ProductProvider , ConsumidorProduto };