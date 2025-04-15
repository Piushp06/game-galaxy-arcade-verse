
import React from 'react';
import Navbar from '@/components/Navbar';
import FeaturedGames from '@/components/FeaturedGames';
import GameGrid from '@/components/GameGrid';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTrendingGames, getTopRatedGames } from '@/data/games';
import GameCard from '@/components/GameCard';

const Index = () => {
  const trendingGames = getTrendingGames().slice(0, 4);
  const topRatedGames = getTopRatedGames().slice(0, 4);
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Featured Games Hero Section */}
        <FeaturedGames />
        
        {/* Trending Games */}
        <section className="game-section py-10 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="section-title !mb-0">Trending Now</h2>
              <Link to="/trending">
                <Button variant="link" className="text-gaming-purple">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {trendingGames.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Top Rated Games */}
        <section className="game-section py-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="section-title !mb-0">Top Rated</h2>
              <Link to="/top-rated">
                <Button variant="link" className="text-gaming-purple">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {topRatedGames.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </section>
        
        {/* All Games with Infinite Loading */}
        <GameGrid 
          title="All Games" 
          subtitle="Scroll down to discover more games" 
        />
      </main>
      
      <footer className="bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gaming-purple to-gaming-blue mr-2">
                GameGalaxy
              </span>
              <span className="text-sm text-muted-foreground">© 2025 All rights reserved</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-gaming-purple">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-gaming-purple">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-gaming-purple">Contact</a>
              <a href="#" className="text-muted-foreground hover:text-gaming-purple">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
