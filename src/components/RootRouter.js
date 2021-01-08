import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import Main from '../pages/main';
import Brand from '../pages/brand';
import Product from './Product';
import Magazine from '../pages/Magazine';
import AppLayout from './AppLayout';
import SignUp from './SignUp';
import CurrentMagazine from '../pages/Magazine/CurrentMagazine';
import MyPage from '../pages/MyPage';
import Detail from './Detail';

const LoginRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/product/:category" component={Detail} />
    <Route path="/product" component={Product} />
    <Route path="/brand/:category" component={Detail} />
    <Route path="/brand" component={Brand} />
    <Route path="/magazine" component={Magazine} />
    <Route path="/magazinepage" component={MagazinePage} />
    <Route path="/mypage" component={MyPage} />
    <Redirect from="*" to="/" />
  </Switch>
);

const HomeRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/product/:category" component={Detail} />
    <Route path="/product" component={Product} />
    <Route path="/brand/:category" component={Detail} />
    <Route path="/brand" component={Brand} />
    <Route path="/magazine" component={Magazine} />
    <Route path="/currentmagazine" component={CurrentMagazine} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Redirect from="*" to="/login" />
  </Switch>
);

const RootRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <AppLayout>
            <LoginRoutes />
          </AppLayout>
        ) : (
          <AppLayout>
            <HomeRoutes />
          </AppLayout>
        )}
      </Switch>
    </Router>
  );
};

export default RootRouter;
