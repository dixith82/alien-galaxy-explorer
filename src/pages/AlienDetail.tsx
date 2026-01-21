import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { aliensData } from '@/data/aliensData';
import { ArrowLeft, Zap, Globe, Dna, Shield, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import TransformationOverlay from '@/components/TransformationOverlay/TransformationOverlay';

const AlienDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isTransforming, setIsTransforming] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [imageError, setImageError] = useState(false);

  const alien = aliensData.find((a) => a.id === Number(id));

  useEffect(() => {
    // Trigger transformation animation on mount
    setIsTransforming(true);
    const timer = setTimeout(() => {
      setIsTransforming(false);
      setTimeout(() => setShowContent(true), 300);
    }, 1500);
    return () => clearTimeout(timer);
  }, [id]);

  if (!alien) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Alien Not Found
          </h1>
          <Link to="/aliens">
            <Button variant="outline" className="font-display">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Aliens
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = aliensData.findIndex((a) => a.id === alien.id);
  const prevAlien = aliensData[currentIndex - 1];
  const nextAlien = aliensData[currentIndex + 1];

  const stats = [
    { label: 'Strength', value: Math.floor(Math.random() * 30) + 70, icon: Shield },
    { label: 'Speed', value: Math.floor(Math.random() * 30) + 70, icon: Zap },
    { label: 'Intelligence', value: Math.floor(Math.random() * 30) + 70, icon: Star },
    { label: 'Durability', value: Math.floor(Math.random() * 30) + 70, icon: Shield },
  ];

  return (
    <>
      <TransformationOverlay 
        isActive={isTransforming} 
        alienColor={alien.color} 
        alienName={alien.name}
      />

      <main className={cn(
        "min-h-screen pt-24 pb-16 transition-all duration-500",
        showContent ? "opacity-100" : "opacity-0"
      )}>
        {/* Background Effects */}
        <div 
          className="fixed inset-0 pointer-events-none transition-opacity duration-1000"
          style={{
            background: `radial-gradient(ellipse at 50% 30%, ${alien.color}15, transparent 60%)`
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <Link to="/aliens" className="inline-block mb-8">
            <Button 
              variant="ghost" 
              className="font-display text-muted-foreground hover:text-primary group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Aliens
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-3xl opacity-30 blur-3xl"
                style={{ backgroundColor: alien.color }}
              />
              <div className="relative aspect-square rounded-3xl bg-card border border-border overflow-hidden p-8">
                {!imageError ? (
                  <img
                    src={alien.image}
                    alt={alien.name}
                    className="w-full h-full object-contain animate-float"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center text-9xl font-display font-bold rounded-full animate-float"
                    style={{ backgroundColor: alien.color, color: '#000' }}
                  >
                    {alien.name[0]}
                  </div>
                )}

                {/* Omnitrix Symbol */}
                <div 
                  className="absolute bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center animate-pulse-glow"
                  style={{ backgroundColor: alien.color }}
                >
                  <span className="font-display font-bold text-2xl" style={{ color: '#000' }}>
                    {alien.id}
                  </span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              {/* Species Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: `${alien.color}20`, color: alien.color }}
              >
                <Dna className="w-4 h-4" />
                {alien.species}
              </div>

              {/* Name */}
              <h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-4"
                style={{ color: alien.color, textShadow: `0 0 30px ${alien.color}50` }}
              >
                {alien.name}
              </h1>

              {/* Planet */}
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <Globe className="w-5 h-5" style={{ color: alien.color }} />
                <span className="font-body text-lg">Home Planet: {alien.planet}</span>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {alien.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-4 h-4" style={{ color: alien.color }} />
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ 
                            width: showContent ? `${stat.value}%` : '0%',
                            backgroundColor: alien.color 
                          }}
                        />
                      </div>
                      <span className="font-display font-bold text-sm" style={{ color: alien.color }}>
                        {stat.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Powers Section */}
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary" />
              Powers & Abilities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {alien.powers.map((power, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: alien.color }}
                  />
                  
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${alien.color}20` }}
                  >
                    <Zap className="w-6 h-6" style={{ color: alien.color }} />
                  </div>
                  
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {power}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center pt-8 border-t border-border">
            {prevAlien ? (
              <button
                onClick={() => {
                  setShowContent(false);
                  setIsTransforming(true);
                  setTimeout(() => navigate(`/alien/${prevAlien.id}`), 100);
                }}
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider">Previous</div>
                  <div className="font-display font-bold">{prevAlien.name}</div>
                </div>
              </button>
            ) : <div />}

            {nextAlien ? (
              <button
                onClick={() => {
                  setShowContent(false);
                  setIsTransforming(true);
                  setTimeout(() => navigate(`/alien/${nextAlien.id}`), 100);
                }}
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider">Next</div>
                  <div className="font-display font-bold">{nextAlien.name}</div>
                </div>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            ) : <div />}
          </section>
        </div>
      </main>
    </>
  );
};

export default AlienDetail;
