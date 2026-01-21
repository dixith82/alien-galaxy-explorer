import Hero from '@/components/Hero/Hero';
import Slider from '@/components/Slider/Slider';
import AlienCard from '@/components/AlienCard/AlienCard';
import { aliensData } from '@/data/aliensData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Slider />
      
      {/* Featured Aliens Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Meet The <span className="text-primary omnitrix-text-glow">Aliens</span>
              </h2>
              <p className="text-muted-foreground">
                Discover the incredible powers of each transformation
              </p>
            </div>
            <Link to="/aliens">
              <Button 
                variant="outline" 
                className="font-display border-primary/50 text-primary hover:bg-primary/10 group"
              >
                View All
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aliensData.slice(0, 3).map((alien, index) => (
              <AlienCard key={alien.id} alien={alien} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
              <span className="font-display font-bold text-primary-foreground text-3xl">10</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="text-primary omnitrix-text-glow">Transform?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Explore all the alien transformations and discover their unique abilities. 
              The power of the Omnitrix awaits!
            </p>
            
            <Link to="/aliens">
              <Button 
                size="lg"
                className="font-display text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground omnitrix-glow hover:scale-105 transition-all duration-300"
              >
                Explore All Aliens
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2024 Ben 10 Fan Project. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
