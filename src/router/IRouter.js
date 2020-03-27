import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from '../App'
import Admin from '../admin'
import Common from '../common'
import error404 from '../views/errorpages/error404'
import login from '../views/login'
import detail1 from '../views/detail1'
import detail2 from '../views/detail2'
import detail3 from '../views/detail3'
import detail4 from '../views/detail4'
import subDetail1 from '../views/detail3/subDetail1'
import subDetail2 from '../views/detail3/subDetail2'

const IRouter = () => (
  <HashRouter>
    <App>
      <Route>
        <Switch>
          <Route path="/login" component={login}></Route>
          <Route path="/common">
            <Common>
              <Switch>
                <Route path='/common/detail4' component={ detail4 } />
              </Switch>
            </Common>
          </Route>
          <Route path="/" render={() =>
            <Admin>
              <Switch>
                <Route path="/detail1" component={detail1}></Route>
                <Route path="/detail2" component={detail2}></Route>
                <Route path="/detail3" component={detail3}></Route>
                <Route path="/detail3/subDetail1" component={subDetail1}></Route>
                <Route path="/detail3/subDetail2" component={subDetail2}></Route>
                <Route exact path='/' render={() => <Redirect to='/detail1'></Redirect>}></Route>
                <Route component={error404}></Route>
              </Switch>
            </Admin>
          }></Route>
        </Switch>
      </Route>
    </App>
  </HashRouter>
);

export default IRouter;
