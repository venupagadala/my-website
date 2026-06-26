import { useState, useEffect, lazy, Suspense } from "react";
import {
  // Only import non-lazy components that load immediately on the first view
  Main,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

// ===================================
// Code Splitting (Lazy Imports)
// ===================================

// Lazy load heavy sections (Expertise, Timeline, Project, Certifications) to reduce main bundle size.
const LazyExpertise = lazy(() => import('./components/Expertise'));
const LazyTimeline = lazy(() => import('./components/Timeline'));
const LazyProject = lazy(() => import('./components/Project'));
const LazyCertifications = lazy(() => import('./components/Certifications'));

// Detect if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Simple fallback UI for the Suspense boundary
const LoadingFallback = () => (
    <div className="lazy-loading-fallback" role="status" aria-live="polite">
        <p>Loading portfolio section...</p>
    </div>
);


function App() {
    // Theme state initialized from browser's local storage
    const [mode, setMode] = useState<'light' | 'dark'>(() => {
        const savedMode = localStorage.getItem('theme-mode');
        return savedMode === 'dark' ? 'dark' : 'light';
    });

    // Toggle function for theme switch
    const handleModeChange = () => {
        setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
    }

    // Persist theme choice to local storage on change
    useEffect(() => {
        localStorage.setItem('theme-mode', mode);
    }, [mode]);

    // Ensure page always starts at the top
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        // Apply global theme class for CSS styling
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            {/* Skip Navigation Links for Accessibility */}
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <a href="#expertise" className="skip-link">Skip to expertise</a>
            <a href="#history" className="skip-link">Skip to work history</a>
            <a href="#projects" className="skip-link">Skip to projects</a>
            <a href="#contact" className="skip-link">Skip to contact</a>
            
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            <FadeIn transitionDuration={prefersReducedMotion ? 0 : 700}>
                
                {/* Always rendered immediately */}
                <main id="main-content">
                    <Main/>
                </main>
                
                {/* Suspense boundary for lazy-loaded content chunks */}
                <Suspense fallback={<LoadingFallback />}>
                    <LazyExpertise/>
                    <LazyTimeline/>
                    <LazyCertifications/>
                    <LazyProject/>
                </Suspense>
                
                <Contact/>
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;