import './App.css';
import React, { Component } from 'react';
import { Alert } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Alert primary>Primeiro botão</Alert>
        <Alert secondary>Segundo botão</Alert>
        <span><i className="fas fa-home" /></span>
      </div>
    )
  }
}
