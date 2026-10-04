import { StrictMode, useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import logo from './assets/logo.svg';
import './style.css';

function usePath() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return path;
}

function Link({ to, children }: { to: string; children: ReactNode }) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  );
}

function Home() {
  const label = import.meta.env.VITE_BUILD_LABEL ?? 'local build (VITE_BUILD_LABEL not set)';
  return (
    <>
      <img src={logo} width={96} height={96} alt="logo" />
      <h1>birden static example</h1>
      <p>Build label: <code>{label}</code></p>
      <p>Try opening <code>/about</code> directly: the platform serves index.html (SPA fallback).</p>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
      <p>This page is rendered client-side. A direct hit on /about only works with SPA fallback enabled.</p>
    </>
  );
}

function App() {
  const path = usePath();
  return (
    <main>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      {path === '/about' ? <About /> : <Home />}
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
