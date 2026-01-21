import { useState } from 'react';
import AlienCard from '@/components/AlienCard/AlienCard';
import { aliensData } from '@/data/aliensData';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Aliens = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAliens = aliensData.filter((alien) =>
    alien.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alien.species.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alien.planet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            All <span className="text-primary omnitrix-text-glow">Aliens</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore all the alien transformations available in the Omnitrix. 
            Each alien has unique powers and abilities.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search aliens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-card border-border focus:border-primary font-body text-lg rounded-xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary">
              {filteredAliens.length}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Aliens Found
            </div>
          </div>
        </div>

        {/* Aliens Grid */}
        {filteredAliens.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAliens.map((alien, index) => (
              <AlienCard key={alien.id} alien={alien} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              No Aliens Found
            </h3>
            <p className="text-muted-foreground">
              Try searching for a different alien name, species, or planet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Aliens;
