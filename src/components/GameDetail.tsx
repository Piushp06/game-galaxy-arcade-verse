
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getGameById } from '@/data/games';
import { Button } from '@/components/ui/button';
import { Star, Share2, ArrowLeft, Users, Clock, Trophy, PlayCircle } from 'lucide-react';
import { toast } from 'sonner';

const GameDetail = () => {
  const { id } = useParams<{ id: string }>();
  const game = getGameById(id || '');

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Game not found</h2>
        <p className="mb-6">Sorry, we couldn't find the game you're looking for.</p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: game.title,
        text: game.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const formattedPlays = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(game.plays);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-gaming-purple mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to all games
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Game Preview */}
        <div className="lg:col-span-2">
          <div className="glass-card rounded-xl overflow-hidden relative aspect-video">
            <img 
              src={game.imageUrl} 
              alt={game.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Button 
                size="lg" 
                className="btn-gradient rounded-full hover:scale-105 transition-all"
                onClick={() => toast.success('Game started!')}
              >
                <PlayCircle className="h-5 w-5 mr-2" />
                Play Now
              </Button>
            </div>
          </div>
          
          {/* Game Info - Mobile View */}
          <div className="lg:hidden mt-6">
            <h1 className="text-3xl font-bold">{game.title}</h1>
            <div className="flex items-center mt-2 mb-4">
              <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full mr-3">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                <span className="font-medium">{game.rating}</span>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                <span>{formattedPlays} plays</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {game.category.map((category, index) => (
                <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                  {category}
                </span>
              ))}
            </div>
            
            <Button
              variant="outline"
              className="w-full mb-6"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share Game
            </Button>
          </div>
          
          {/* Description */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">About this game</h2>
            <p className="text-muted-foreground">
              {game.description}
              {/* Extended description for demo purposes */}
              {" "}
              Enjoy hours of entertainment with simple controls and addictive gameplay. 
              Challenge yourself to beat your high score or compete with friends. 
              This game features beautiful graphics, smooth animations, and an engaging soundtrack 
              that will keep you coming back for more.
            </p>
          </div>
          
          {/* How to play */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">How to Play</h2>
            <div className="glass-card rounded-lg p-6">
              <p className="mb-4">
                Use your mouse or touchscreen to control the game. Click or tap to interact with game elements. 
                The objective is to score as many points as possible while avoiding obstacles.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Click or tap to start the game</li>
                <li>Use arrow keys or swipe to move your character</li>
                <li>Collect power-ups to enhance your abilities</li>
                <li>Avoid obstacles and enemies</li>
                <li>Try to beat your previous high score</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Game Info - Desktop View */}
          <div className="hidden lg:block glass-card rounded-xl p-6 mb-6">
            <h1 className="text-2xl font-bold mb-4">{game.title}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full mr-3">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                <span className="font-medium">{game.rating}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {game.category.map((category, index) => (
                <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                  {category}
                </span>
              ))}
            </div>
            
            <Button 
              className="w-full mb-4"
              onClick={() => toast.success('Game started!')}
            >
              <PlayCircle className="h-4 w-4 mr-2" />
              Play Now
            </Button>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share Game
            </Button>
          </div>
          
          {/* Stats */}
          <div className="glass-card rounded-xl p-6 mb-6">
            <h2 className="text-lg font-bold mb-4">Game Stats</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Total Plays</span>
                </div>
                <span className="font-medium">{formattedPlays}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Avg. Play Time</span>
                </div>
                <span className="font-medium">4m 32s</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-muted-foreground">
                  <Trophy className="h-4 w-4 mr-2" />
                  <span>Global Ranking</span>
                </div>
                <span className="font-medium">#7</span>
              </div>
            </div>
          </div>
          
          {/* Leaderboard */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Top Players</h2>
            
            <div className="space-y-3">
              {[
                { name: "GamerKing42", score: 12482, avatar: "https://i.pravatar.cc/150?img=1" },
                { name: "PixelMaster", score: 9876, avatar: "https://i.pravatar.cc/150?img=2" },
                { name: "GameWizard", score: 8754, avatar: "https://i.pravatar.cc/150?img=3" },
                { name: "LevelBoss", score: 7632, avatar: "https://i.pravatar.cc/150?img=4" },
                { name: "HighScorer", score: 6421, avatar: "https://i.pravatar.cc/150?img=5" }
              ].map((player, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-6 text-center font-medium text-muted-foreground">
                      {index + 1}
                    </span>
                    <img 
                      src={player.avatar} 
                      alt={player.name}
                      className="h-8 w-8 rounded-full object-cover ml-2 mr-3"
                    />
                    <span className="font-medium">{player.name}</span>
                  </div>
                  <span className="text-gaming-purple font-bold">{player.score}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="link" className="text-gaming-purple">
                View Full Leaderboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
