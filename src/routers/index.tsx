import { ROUTES } from 'constants/routers';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NotFound';
import ProfilePage from 'pages/Profile';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path={ROUTES.LOGIN} element={<LoginPage />} /> */}
      <Route element={<PrivateRoute/>}>
        <Route path={ROUTES.PROFILE} element={<ProfilePage/>}/>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
