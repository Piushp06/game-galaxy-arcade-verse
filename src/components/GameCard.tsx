
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, PlayCircle, Users } from 'lucide-react';
import { Game } from '@/data/games';
import { cn } from '@/lib/utils';

interface GameCardProps {
  game: Game;
  className?: string;
  featured?: boolean;
}

const GameCard = ({ game, className, featured = false }: GameCardProps) => {
  const formattedPlays = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(game.plays);

  return (
    <Link 
      to={`/game/${game.id}`} 
      className={cn(
        'game-card flex flex-col group h-full',
        featured ? 'aspect-[4/3] md:aspect-[16/9]' : 'aspect-[3/4]',
        className
      )}
    >
      <div className="relative w-full h-full">
        {/* Game Image */}
        <img 
          src={game.imageUrl} 
          alt={game.title} 
          className={cn(
            "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
            featured ? "aspect-video" : "aspect-[3/4]"
          )}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm animate-pulse-subtle">
            <PlayCircle className="h-12 w-12 text-white" />
          </div>
        </div>
        
        {/* Rating badge */}
        <div className="absolute top-3 right-3 flex items-center space-x-1 px-2 py-1 rounded-full bg-white/90 text-sm font-medium text-yellow-600">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          <span>{game.rating}</span>
        </div>
        
        {/* Badge for trending/featured/top-rated */}
        {game.trending && (
          <div className="absolute top-3 left-3 badge-secondary">
            Trending
          </div>
        )}
        
        {/* Game info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-bold text-lg md:text-xl line-clamp-1">{game.title}</h3>
          
          <div className="mt-1 flex items-center space-x-2 text-xs text-white/80">
            <span className="bg-white/30 px-2 py-0.5 rounded-full">{game.category[0]}</span>
            {game.category[1] && (
              <span className="bg-white/30 px-2 py-0.5 rounded-full">{game.category[1]}</span>
            )}
          </div>
          
          {featured && (
            <p className="mt-2 text-sm text-white/80 line-clamp-2">{game.description}</p>
          )}
          
          <div className="mt-2 flex items-center text-xs text-white/70">
            <Users className="h-3.5 w-3.5 mr-1" />
            <span>{formattedPlays} plays</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
