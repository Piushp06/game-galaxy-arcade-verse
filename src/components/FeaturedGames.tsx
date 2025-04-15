
import React from 'react';
import { Button } from "@/components/ui/button";
import { getFeaturedGames } from '@/data/games';
import GameCard from './GameCard';
import { Shuffle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const FeaturedGames = () => {
  const featuredGames = getFeaturedGames();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const handleSurpriseMe = () => {
    const randomGameId = Math.floor(Math.random() * 12) + 1;
    navigate(`/game/${randomGameId}`);
  };

  const mainFeaturedGame = featuredGames[0];
  const otherFeaturedGames = featuredGames.slice(1);

  return (
    <div className="py-6">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <div className="hero-gradient rounded-2xl overflow-hidden mb-8">
          <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Play Instantly.<br />
                <span className="text-white/90">No Downloads.</span>
              </h1>
              <p className="text-lg mb-6 text-white/80">
                Dive into hundreds of free games you can play right in your browser. 
                No installs, no waiting, just pure fun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
                >
                  Browse Games
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                  onClick={handleSurpriseMe}
                >
                  <Shuffle className="mr-2 h-4 w-4" />
                  Surprise Me
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 animate-float">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <GameCard game={mainFeaturedGame} featured />
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Games Section */}
        <div>
          <h2 className="section-title">Featured Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherFeaturedGames.map((game) => (
              <GameCard key={game.id} game={game} featured={!isMobile} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGames;
