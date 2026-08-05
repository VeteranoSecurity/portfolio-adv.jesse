import PortfolioHero from './components/ui/portfolio-hero';
import ProfileInsight from './components/ui/profile-insight';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-amber-500/30 selection:text-white">
      {/* Page 1: Portfolio Hero (Big Name, BlurText, Image, Menu) */}
      <PortfolioHero />

      {/* Page 2: Profile Insight (Casper Lightman print layout with Jesse Marques Info) */}
      <ProfileInsight />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
