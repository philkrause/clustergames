import React from 'react';
import athena from '../images/athena_cover.png'
import bigbass from '../images/bigbass_cover.png'
import treasure from '../images/treasure_cover.png'
import yeti from '../images/yeti_cover.png'
import forging from '../images/forging_cover.png'
import sumo from '../images/sumo_cover.png'
import oodles from '../images/oodles_cover.png'
import dynamite from '../images/dynamite_cover.png'
import mustang from '../images/mustang_cover.png'
import frontrunner from '../images/frontrunner_cover.png'
import jokers from '../images/6jokers_cover.png'
import mice from '../images/mysterymice_cover.png'
import buffalo from '../images/buffalo_cover.png'
import gem from '../images/gem_cover.png'











const SlotGames = () => {
  const games = [
    {
      name: '6 Jokers',
      image: jokers,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs5magicdoor&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
    },
    {
      name: 'Aztec Treasure Hunt',
      image: treasure,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20trswild3&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
    },
    {
      name: 'Big Bass',
      image: bigbass,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10bbdoubled&amp;websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&amp;jurisdiction=99&amp;lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&amp;lang=EN&amp;cur=USD"
    },
    {
      name: 'Buffalo King',
      image: buffalo,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vswaysbkingasc&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
    },
    {
      name: 'Dyanmite Diggin',
      image: dynamite,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10dyndigd&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
    },
    {
      name: 'Forging Wilds',
      image: forging,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20forgewilds&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
    },
    {
      name: 'Front Runner',
      image: frontrunner,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10frontrun&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
    },
    {
      name: 'Gem Elevator',
      image: gem,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20elevclust&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
    },
    {
      name: 'Mustang Gold',
      image: mustang,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vswaysgoldcol&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
    },
    {
      name: 'Mystery Mice',
      image: mice,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20powerwild&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
    },
    {
      name: 'Oodles of Noodles',
      image: oodles,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10noodles&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
    },
    {
      name: 'Sumo Supreme',
      image: sumo,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vswaysmegwghts&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
    },
    {
      name: 'Yeti Quest',
      image: yeti,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20mesmult&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
    },
    {
      name: 'Wisdom of Athena',
      image: athena,
      link: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20procountx&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
    }
  ];

  return (
    <div className="slot-games">
      <div className="games-list">
        {games.map((game, index) => (
          <div key={index} className="game-card">
            <a href={game.link}>
              <img src={game.image} alt={game.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotGames;

