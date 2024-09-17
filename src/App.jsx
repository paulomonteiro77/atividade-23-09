import React from 'react';
import Jogos from './Componentes/Jogos';
import LoginForm from './Componentes/LoginForm';
import ImageComponent from './Componentes/ImageComponent';
import CheckboxComponent from './Componentes/CheckboxComponent';

const App = () => {
  return (
    <div>
      <h1>Meus Componentes</h1>
      <Jogos /> 
      <LoginForm /> 
      <ImageComponent />
      <CheckboxComponent />
    </div>
  );
};

export default App;