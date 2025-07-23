import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection>
        <MainContent />
      </HeroSection>
    </main>
  );
}
