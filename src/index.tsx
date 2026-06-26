import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

// Enhanced Web Vitals reporting with detailed logging
reportWebVitals((metric) => {
  // Log all metrics in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      id: metric.id,
      delta: metric.delta,
    });
  }
  
  // In production, you could send this to an analytics endpoint
  // Example: sendToAnalytics(metric);
});
