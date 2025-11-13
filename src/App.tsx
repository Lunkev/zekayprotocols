import './App.css';
import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import DocsPage from './components/DocsPage';
import FAQPage from './components/FAQPage';
import EcosystemsPage from './components/EcosystemsPage';
import { GLSLHills } from './components/ui/glsl-hills';
import { AppleStyleDock } from './components/AppleStyleDock';

type Page = 'main' | 'about' | 'docs' | 'faq' | 'ecosystems';

function App() {
  const [showMain, setShowMain] = useState(false);
  const [initialFadeIn, setInitialFadeIn] = useState(false);
  const [contentFadeIn, setContentFadeIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('main');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
      setTimeout(() => {
        setInitialFadeIn(true);
        setContentFadeIn(true);
      }, 50);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const navigateToPage = (page: Page) => {
    if (page === currentPage || isTransitioning) return;

    setIsTransitioning(true);
    setContentFadeIn(false);

    setTimeout(() => {
      setCurrentPage(page);
      setTimeout(() => {
        setContentFadeIn(true);
        setIsTransitioning(false);
      }, 50);
    }, 1000);
  };

  return (
    <>
      {showMain ? (
        <div className="relative flex h-screen w-screen overflow-hidden bg-black">
          {/* Bakgrund - fade in ENDAST vid initial laddning */}
          <div
            className={`transition-opacity ease-in-out ${
              initialFadeIn ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDuration: '1000ms' }}
          >
            <GLSLHills />
          </div>
          
          {/* Innehåll med fade animation vid sidnavigering */}
          <div
            className={`absolute inset-0 transition-opacity ease-in-out pointer-events-none ${
              contentFadeIn ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDuration: '1000ms' }}
          >
            {currentPage === 'main' && <MainPage onNavigate={navigateToPage} />}
            {currentPage === 'about' && <AboutPage onNavigate={navigateToPage} />}
            {currentPage === 'docs' && <DocsPage onNavigate={navigateToPage} />}
            {currentPage === 'faq' && <FAQPage onNavigate={navigateToPage} />}
            {currentPage === 'ecosystems' && <EcosystemsPage onNavigate={navigateToPage} />}
          </div>
          
          {/* Navigationsdock - fade in ENDAST vid initial laddning */}
          <div
            className={`transition-opacity ease-in-out ${
              initialFadeIn ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDuration: '1000ms' }}
          >
            <AppleStyleDock onNavigate={navigateToPage} />
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default App;
