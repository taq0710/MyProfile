import HomePage from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path={ROUTES.LOGIN} element={<LoginPage />} /> */}
      <Route>
      
      </Route>
    </Routes>
  );
};

export default Router;
