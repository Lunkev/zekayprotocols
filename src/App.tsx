import './App.css';
import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import DocsPage from './components/DocsPage';

type Page = 'main' | 'about' | 'docs';

function App() {
  const [showMain, setShowMain] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('main');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
      setTimeout(() => {
        setFadeIn(true);
      }, 50);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const navigateToPage = (page: Page) => {
    if (page === currentPage || isTransitioning) return;

    setIsTransitioning(true);
    setFadeIn(false);

    setTimeout(() => {
      setCurrentPage(page);
      setTimeout(() => {
        setFadeIn(true);
        setIsTransitioning(false);
      }, 50);
    }, 1000);
  };

  return (
    <>
      {showMain ? (
        <div
          className={`transition-opacity ease-in-out ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDuration: '1000ms' }}
        >
          {currentPage === 'main' && <MainPage onNavigate={navigateToPage} />}
          {currentPage === 'about' && <AboutPage onNavigate={navigateToPage} />}
          {currentPage === 'docs' && <DocsPage onNavigate={navigateToPage} />}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default App;
