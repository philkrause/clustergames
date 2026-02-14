import React from 'react';
import wolf from '../images/wolf-clustergames.png'
import bets from '../images/bets-clustergames.png'
import unity3d from '../images/3d-clustergames.png'
import space from '../images/space-clustergames.png'
import sw from '../images/mech.jpg'











const SlotGames = () => {
  const base_url = "clustergames.io"
  const games = [
    {
      name: 'Mech Surivivor',
      image: sw,
      link: `https://mech.${base_url}`
    },
    {
      name: '5285 AD',
      image: wolf,
      link: `https://thewolf.${base_url}`
    },
    {
      name: 'Horse Racing',
      image: bets,
      link: `https://bets.${base_url}`
    },
    {
      name: 'Unity Platformer',
      image: unity3d,
      link: `https://3d.${base_url}`
    },
    {
      name: 'Space Game',
      image: space,
      link: `https://space.${base_url}`
    }
  ];

  return (
    <div className="slot-games">
      <div className="games-list">
        {games.map((game, index) => (
          <div key={index} className="game-card">
            <a href={game.link}>
              <img src={game.image} alt={game.name} />
              <div className="game-title">{game.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotGames;

