import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { aliensData, Alien } from '@/data/aliensData';
import { Button } from '@/components/ui/button';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % aliensData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + aliensData.length) % aliensData.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentAlien = aliensData[currentIndex];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background: `radial-gradient(ellipse at center, ${currentAlien.color}10, transparent 70%)`
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary omnitrix-text-glow">Aliens</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Swipe through the most powerful transformations in the Omnitrix
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Slider */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-border bg-card">
            {aliensData.map((alien, index) => (
              <SliderItem 
                key={alien.id} 
                alien={alien} 
                isActive={index === currentIndex}
              />
            ))}

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-primary/20 border border-border z-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-primary/20 border border-border z-10"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {aliensData.map((alien, index) => (
              <button
                key={alien.id}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "w-8 bg-primary omnitrix-glow" 
                    : "bg-muted hover:bg-muted-foreground"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SliderItemProps {
  alien: Alien;
  isActive: boolean;
}

const SliderItem = ({ alien, isActive }: SliderItemProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col md:flex-row items-center transition-all duration-700",
        isActive 
          ? "opacity-100 translate-x-0" 
          : "opacity-0 translate-x-full pointer-events-none"
      )}
    >
      {/* Image Side */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at center, ${alien.color}, transparent 60%)`
          }}
        />
        {!imageError ? (
          <img
            src={alien.image}
            alt={alien.name}
            className={cn(
              "relative z-10 max-h-full object-contain transition-transform duration-700",
              isActive && "animate-float"
            )}
            onError={() => setImageError(true)}
          />
        ) : (
          <div 
            className="w-40 h-40 rounded-full flex items-center justify-center text-6xl font-display font-bold animate-float"
            style={{ backgroundColor: alien.color, color: '#000' }}
          >
            {alien.name[0]}
          </div>
        )}
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <div 
          className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
          style={{ backgroundColor: `${alien.color}20`, color: alien.color }}
        >
          {alien.species}
        </div>
        
        <h3 
          className="font-display text-4xl md:text-5xl font-bold mb-4"
          style={{ color: alien.color }}
        >
          {alien.name}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {alien.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {alien.powers.map((power, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm rounded-lg bg-secondary border border-border"
            >
              {power}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
