import { ReactNode } from 'react';

interface HeroSectionProps {
  children: ReactNode;
}

const HeroSection = ({ children }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute top-[-6px] left-1 w-[1431px] h-[430.5px] blur-[58px] -z-10" style={{backgroundColor: 'var(--color-light-blue)'}}></div>
      
      {/* Main content container */}
      <div className="relative z-10 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-20">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
