
export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  category: string[];
  trending?: boolean;
  featured?: boolean;
  topRated?: boolean;
  plays: number;
}

export const games: Game[] = [
  {
    id: "1",
    title: "Color Blast",
    description: "Match colors in this fast-paced puzzle game that tests your reflexes and pattern recognition.",
    imageUrl: "https://images.unsplash.com/photo-1614850715649-c8c2f4eee9cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHV6emxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    rating: 4.8,
    category: ["Puzzle", "Arcade"],
    trending: true,
    featured: true,
    topRated: true,
    plays: 240567
  },
  {
    id: "2",
    title: "Ninja Runner",
    description: "Run, jump, and slide your way through obstacles in this addictive endless runner game.",
    imageUrl: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    rating: 4.5,
    category: ["Runner", "Action"],
    trending: true,
    plays: 189432
  },
  {
    id: "3",
    title: "Space Shooter",
    description: "Defend the galaxy from alien invaders in this classic arcade space shooter.",
    imageUrl: "https://images.unsplash.com/photo-1518339647741-39d9977f1866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2UlMjBzaGlwfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    rating: 4.3,
    category: ["Shooter", "Arcade"],
    topRated: true,
    plays: 167890
  },
  {
    id: "4",
    title: "Word Master",
    description: "Test your vocabulary and word-finding skills in this challenging word puzzle.",
    imageUrl: "https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29yZHxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 4.6,
    category: ["Word", "Puzzle"],
    topRated: true,
    plays: 152345
  },
  {
    id: "5",
    title: "Tower Defense",
    description: "Strategic tower defense game where you must protect your kingdom from waves of enemies.",
    imageUrl: "https://images.unsplash.com/photo-1615672969010-ded84639a956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    rating: 4.7,
    category: ["Strategy", "Tower Defense"],
    trending: true,
    featured: true,
    plays: 148765
  },
  {
    id: "6",
    title: "Bubble Pop",
    description: "Pop bubbles and create chain reactions in this colorful and addictive puzzle game.",
    imageUrl: "https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnViYmxlc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 4.2,
    category: ["Puzzle", "Casual"],
    plays: 134567
  },
  {
    id: "7",
    title: "Monster Dash",
    description: "Run and jump as a cute monster in this platformer adventure through fantastical worlds.",
    imageUrl: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uc3RlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 4.4,
    category: ["Platformer", "Adventure"],
    trending: true,
    plays: 128976
  },
  {
    id: "8",
    title: "Math Challenge",
    description: "Sharpen your math skills with increasingly difficult puzzles and brain teasers.",
    imageUrl: "https://images.unsplash.com/photo-1635372722656-389f87a941b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0aHxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 4.0,
    category: ["Educational", "Puzzle"],
    plays: 98765
  },
  {
    id: "9",
    title: "Farm Village",
    description: "Build and manage your own virtual farm in this relaxing simulation game.",
    imageUrl: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 4.5,
    category: ["Simulation", "Casual"],
    featured: true,
    plays: 121432
  },
  {
    id: "10",
    title: "Speed Racer",
    description: "Push your driving skills to the limit in this high-octane racing game.",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    rating: 4.6,
    category: ["Racing", "Sports"],
    topRated: true,
    plays: 118765
  },
  {
    id: "11",
    title: "Chess Master",
    description: "Test your strategic thinking in this classic game of chess with multiple difficulty levels.",
    imageUrl: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3N8ZW58MHx8MHx8&w=1000&q=80",
    rating: 4.7,
    category: ["Board", "Strategy"],
    topRated: true,
    plays: 109876
  },
  {
    id: "12",
    title: "Zombie Survival",
    description: "Survive the zombie apocalypse by gathering resources and defending your base.",
    imageUrl: "https://images.unsplash.com/photo-1603926620954-1f22e8615e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8em9tYmllc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    rating: 4.4,
    category: ["Survival", "Action"],
    trending: true,
    plays: 95432
  }
];

export const getRandomGame = (): Game => {
  const randomIndex = Math.floor(Math.random() * games.length);
  return games[randomIndex];
};

export const getFeaturedGames = (): Game[] => {
  return games.filter(game => game.featured);
};

export const getTrendingGames = (): Game[] => {
  return games.filter(game => game.trending);
};

export const getTopRatedGames = (): Game[] => {
  return games.filter(game => game.topRated);
};

export const getGameById = (id: string): Game | undefined => {
  return games.find(game => game.id === id);
};

// For infinite loading simulation
export const getMoreGames = (page: number, limit: number = 6): Promise<Game[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // For demo purposes, we'll just return different subsets of the games array
      const startIndex = (page - 1) * limit % games.length;
      const endIndex = startIndex + limit;
      const result = [];
      
      for (let i = 0; i < limit; i++) {
        const index = (startIndex + i) % games.length;
        result.push(games[index]);
      }
      
      resolve(result);
    }, 800);
  });
};
