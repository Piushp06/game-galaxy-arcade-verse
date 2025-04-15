
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Gamepad2, Home, TrendingUp, Award, LogIn } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-gaming-purple" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gaming-purple to-gaming-blue">
              GameGalaxy
            </span>
          </Link>
          
          {/* Search bar - desktop only */}
          {!isMobile && (
            <div className="hidden md:flex relative mx-auto w-1/3">
              <input
                type="text"
                placeholder="Search games..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gaming-purple/50"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-slate-700 hover:text-gaming-purple transition-colors">
              Home
            </Link>
            <Link to="/trending" className="font-medium text-slate-700 hover:text-gaming-purple transition-colors">
              Trending
            </Link>
            <Link to="/top-rated" className="font-medium text-slate-700 hover:text-gaming-purple transition-colors">
              Top Rated
            </Link>
            <Link to="/categories" className="font-medium text-slate-700 hover:text-gaming-purple transition-colors">
              Categories
            </Link>
            <Button className="btn-gradient">Sign In</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="icon">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search - shown when menu is closed */}
        {isMobile && !isMenuOpen && (
          <div className="mt-3 relative">
            <input
              type="text"
              placeholder="Search games..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gaming-purple/50"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out", 
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: "69px" }}
      >
        <div className="container mx-auto px-4 py-6 space-y-6">
          <Link to="/" onClick={toggleMenu} className="flex items-center p-3 rounded-lg hover:bg-slate-100">
            <Home className="mr-3 h-6 w-6 text-gaming-purple" />
            <span className="text-lg font-medium">Home</span>
          </Link>
          <Link to="/trending" onClick={toggleMenu} className="flex items-center p-3 rounded-lg hover:bg-slate-100">
            <TrendingUp className="mr-3 h-6 w-6 text-gaming-purple" />
            <span className="text-lg font-medium">Trending</span>
          </Link>
          <Link to="/top-rated" onClick={toggleMenu} className="flex items-center p-3 rounded-lg hover:bg-slate-100">
            <Award className="mr-3 h-6 w-6 text-gaming-purple" />
            <span className="text-lg font-medium">Top Rated</span>
          </Link>
          <Link to="/categories" onClick={toggleMenu} className="flex items-center p-3 rounded-lg hover:bg-slate-100">
            <Gamepad2 className="mr-3 h-6 w-6 text-gaming-purple" />
            <span className="text-lg font-medium">Categories</span>
          </Link>
          <Link to="/login" onClick={toggleMenu} className="flex items-center p-3 rounded-lg hover:bg-slate-100">
            <LogIn className="mr-3 h-6 w-6 text-gaming-purple" />
            <span className="text-lg font-medium">Sign In</span>
          </Link>
          <div className="pt-6">
            <Button onClick={toggleMenu} className="w-full btn-gradient">Close Menu</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
