import React, { useState, useEffect, lazy, Suspense } from "react";
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

// Lazy load heavy sections (Expertise, Timeline, Project) to reduce main bundle size.
const LazyExpertise = lazy(() => import('./components/Expertise'));
const LazyTimeline = lazy(() => import('./components/Timeline'));
const LazyProject = lazy(() => import('./components/Project'));


// Simple fallback UI for the Suspense boundary
const LoadingFallback = () => (
    <div className="lazy-loading-fallback">
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
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            <FadeIn transitionDuration={700}>
                
                {/* Always rendered immediately */}
                <Main/>
                
                {/* Suspense boundary for lazy-loaded content chunks */}
                <Suspense fallback={<LoadingFallback />}>
                    <LazyExpertise/>
                    <LazyTimeline/>
                    <LazyProject/>
                </Suspense>
                
                <Contact/>
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;