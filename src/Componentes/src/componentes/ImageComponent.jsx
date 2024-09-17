import React from 'react';
import myImage from '../assets/react.svg';

const ImageComponent = () => {
  return (
    <div>
      <img src={myImage} alt="Descrição da imagem" />
      <p>Não tem como mandar imagem de jogo em boa resolução para stack blitz então coloquei a logo do react!</p>
    </div>
  );
};

export default ImageComponent;
