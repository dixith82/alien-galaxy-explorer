import { Watch, Zap, Shield, Users, Clock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Watch,
    title: "The Omnitrix",
    description: "A powerful device that allows the user to transform into various alien species, each with unique abilities."
  },
  {
    icon: Zap,
    title: "Alien Powers",
    description: "Over 1,000,000 alien DNA samples are stored within the Omnitrix, each granting incredible abilities."
  },
  {
    icon: Shield,
    title: "Hero's Journey",
    description: "Ben Tennyson uses the Omnitrix to protect Earth and the universe from various threats."
  },
  {
    icon: Users,
    title: "The Team",
    description: "Alongside his cousin Gwen and Grandpa Max, Ben fights evil as part of the Tennyson family."
  },
  {
    icon: Clock,
    title: "Time Limit",
    description: "Transformations typically last for a limited time before reverting back to human form."
  },
  {
    icon: Sparkles,
    title: "Ultimate Forms",
    description: "Some aliens can achieve evolved 'Ultimate' forms with enhanced powers and abilities."
  }
];

const About = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
            <span className="font-display font-bold text-primary-foreground text-4xl">10</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary omnitrix-text-glow">Ben 10</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ben 10 is an American animated television series created by Man of Action Studios. 
            The series centers on Ben Tennyson, a 10-year-old boy who discovers a mysterious watch-like 
            device called the Omnitrix, which allows him to transform into ten different alien creatures.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-card border border-border p-8 md:p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 relative">
                The <span className="text-primary">Story</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground relative">
                <p>
                  During a summer vacation with his Grandpa Max and cousin Gwen, young Ben Tennyson 
                  stumbles upon a mysterious device called the Omnitrix. This alien technology attaches 
                  itself to his wrist and grants him the ability to transform into various alien species.
                </p>
                <p>
                  With the power of the Omnitrix, Ben becomes a hero, using his alien transformations 
                  to fight crime and protect Earth from extraterrestrial threats. Each alien form grants 
                  him unique abilities - from the fiery Heatblast to the super-fast XLR8.
                </p>
                <p>
                  Throughout his adventures, Ben learns about responsibility, courage, and what it truly 
                  means to be a hero. The Omnitrix isn't just a weapon - it's a symbol of the connection 
                  between all species in the universe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Key <span className="text-primary omnitrix-text-glow">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Series <span className="text-primary omnitrix-text-glow">Timeline</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {[
              { year: "2005", title: "Ben 10", desc: "The original series where 10-year-old Ben finds the Omnitrix." },
              { year: "2008", title: "Alien Force", desc: "Ben returns as a teenager with new aliens and challenges." },
              { year: "2010", title: "Ultimate Alien", desc: "Ben's identity is revealed to the world." },
              { year: "2012", title: "Omniverse", desc: "New art style and a multiverse of adventures." },
              { year: "2016", title: "Ben 10 (Reboot)", desc: "A fresh take on Ben's original discovery of the Omnitrix." },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                    {item.year}
                  </div>
                  {index < 4 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
