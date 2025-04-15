
import React, { useState, useEffect } from 'react';
import { getMoreGames } from '@/data/games';
import GameCard from './GameCard';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const GameGrid = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  const [games, setGames] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '200px',
  });

  useEffect(() => {
    loadMoreGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView && hasMore && !loading) {
      loadMoreGames();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasMore]);

  const loadMoreGames = async () => {
    if (loading) return;
    
    setLoading(true);
    try {
      const newGames = await getMoreGames(page);
      
      if (newGames.length === 0) {
        setHasMore(false);
      } else {
        setGames(prevGames => [...prevGames, ...newGames]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error('Error loading games:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="game-section py-8">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="text-muted-foreground mb-6">{subtitle}</p>}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {games.map((game, index) => (
            <GameCard key={`${game.id}-${index}`} game={game} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8" ref={ref}>
          {loading && (
            <Button variant="ghost" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameGrid;
