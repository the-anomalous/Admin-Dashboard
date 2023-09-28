import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAppDispatch } from './store/hooks';

import { Layout, Dashboard } from './pages';
import { setTheme } from './features';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (currentTheme) {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  }, [dispatch]);

  return (
    <div className="bg-background-default h-screen flex ">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
