import { Routes, Route, Navigate } from 'react-router-dom';
import { routs } from '../router';

function AppRouter() {
  return (
    <Routes>
      {routs.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      {/* <Route path="*" element={<Navigate to="/portfolios" replace />} /> */}
    </Routes>
  );
}

export default AppRouter;
