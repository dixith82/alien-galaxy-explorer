import { cn } from '@/lib/utils';

interface TransformationOverlayProps {
  isActive: boolean;
  alienColor: string;
  alienName: string;
}

const TransformationOverlay = ({ isActive, alienColor, alienName }: TransformationOverlayProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 pointer-events-none",
        isActive ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Dark overlay */}
      <div 
        className={cn(
          "absolute inset-0 bg-background transition-opacity duration-300",
          isActive ? "opacity-95" : "opacity-0"
        )}
      />

      {/* Radial flash */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-150"
        )}
        style={{
          background: `radial-gradient(circle at center, ${alienColor}60, ${alienColor}20 40%, transparent 70%)`
        }}
      />

      {/* Omnitrix rings animation */}
      <div className="relative">
        {/* Outer ring */}
        <div
          className={cn(
            "absolute -inset-32 border-4 rounded-full transition-all duration-1000",
            isActive ? "opacity-100 scale-100 rotate-180" : "opacity-0 scale-50 rotate-0"
          )}
          style={{ borderColor: alienColor }}
        />
        
        {/* Middle ring */}
        <div
          className={cn(
            "absolute -inset-20 border-4 rounded-full transition-all duration-700 delay-100",
            isActive ? "opacity-100 scale-100 -rotate-90" : "opacity-0 scale-50 rotate-0"
          )}
          style={{ borderColor: alienColor }}
        />

        {/* Inner ring */}
        <div
          className={cn(
            "absolute -inset-10 border-4 rounded-full transition-all duration-500 delay-200",
            isActive ? "opacity-100 scale-100 rotate-45" : "opacity-0 scale-50 rotate-0"
          )}
          style={{ borderColor: alienColor }}
        />

        {/* Center Omnitrix */}
        <div
          className={cn(
            "relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500",
            isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}
          style={{ 
            backgroundColor: alienColor,
            boxShadow: `0 0 40px ${alienColor}, 0 0 80px ${alienColor}80, 0 0 120px ${alienColor}40`
          }}
        >
          {/* Omnitrix hourglass shape */}
          <div className="relative w-16 h-16">
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                borderTop: '32px solid #000'
              }}
            />
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                borderBottom: '32px solid #000'
              }}
            />
          </div>
        </div>

        {/* Transformation text */}
        <div
          className={cn(
            "absolute -bottom-24 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500 delay-300",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <span 
            className="font-display text-3xl md:text-4xl font-black uppercase tracking-wider"
            style={{ 
              color: alienColor,
              textShadow: `0 0 20px ${alienColor}, 0 0 40px ${alienColor}80`
            }}
          >
            {alienName}
          </span>
        </div>
      </div>

      {/* Energy particles */}
      {isActive && (
        <>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-ping"
              style={{
                backgroundColor: alienColor,
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 100}ms`,
                animationDuration: '1s'
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default TransformationOverlay;
