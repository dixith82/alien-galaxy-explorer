import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Alien } from '@/data/aliensData';
import { Zap, Globe, Dna } from 'lucide-react';

interface AlienCardProps {
  alien: Alien;
  index: number;
}

const AlienCard = ({ alien, index }: AlienCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/alien/${alien.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer",
        "bg-card border border-border hover:border-primary/50",
        "hover:scale-[1.02] hover:shadow-2xl"
      )}
      style={{
        animationDelay: `${index * 100}ms`,
        boxShadow: isHovered ? `0 0 30px ${alien.color}30` : undefined
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${alien.color}, transparent 70%)` }}
      />

      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-b from-secondary to-card">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 50% 100%, ${alien.color}40, transparent 60%)`
          }}
        />
        
        {!imageError ? (
          <img
            src={alien.image}
            alt={alien.name}
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-display font-bold"
              style={{ backgroundColor: alien.color, color: '#000' }}
            >
              {alien.name[0]}
            </div>
          </div>
        )}

        {/* Number Badge */}
        <div 
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg"
          style={{ backgroundColor: alien.color, color: '#000' }}
        >
          {alien.id}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Name */}
        <h3 
          className="font-display text-2xl font-bold mb-2 transition-colors duration-300"
          style={{ color: isHovered ? alien.color : undefined }}
        >
          {alien.name}
        </h3>

        {/* Species & Planet */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Dna className="w-4 h-4" style={{ color: alien.color }} />
            <span>{alien.species}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Globe className="w-4 h-4" style={{ color: alien.color }} />
            <span>{alien.planet}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {alien.description}
        </p>

        {/* Powers */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Zap className="w-4 h-4 text-primary" />
            <span>Powers</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {alien.powers.slice(0, 3).map((power, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
              >
                {power}
              </span>
            ))}
            {alien.powers.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                +{alien.powers.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: alien.color }}
      />
    </div>
  );
};

export default AlienCard;
