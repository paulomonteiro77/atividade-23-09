import React from 'react';

const Jogos = () => {
  const games = [
    {
      name: 'Grand Theft Auto V',
      platform: 'PlayStation 4',
      year: 2013,
    },
    { name: 'God of War',
     platform: 'PlayStation 4',
     year: 2018 
    },
    {
      name: 'Red Dead Redemption 2',
      platform: 'PlayStation 4, Xbox One',
      year: 2018,
    },
    {
      name: 'Cyberpunk 2077',
      platform: 'PC, PlayStation 4 e Xbox One',
      year: 2020,
    },
  ];

  return (
    <table border={1} align="center">
      <thead>
        <tr>
          <th>Nome do Jogo</th>
          <th>Plataforma</th>
          <th>Ano de Lançamento</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game, index) => (
          <tr key={index}>
            <td>{game.name}</td>
            <td>{game.platform}</td>
            <td>{game.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Jogos;
