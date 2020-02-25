import React, { lazy, FC, Suspense } from 'react'
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import withRouter from 'common/hoc/withRouter'
const Login = lazy(() => import('./Login'))
const Logout = lazy(() => import('./Logout'))

const routes = [
  { path: '/login', Component: Login },
  { path: '/logout', Component: Logout },
]

const Routes: FC<RouteComponentProps> = ({ location, match }) => (
  <Suspense fallback={<div />}>
    <Switch location={location}>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact={true} path={`${match.path}${path}`} component={Component} />
      ))}
      <Redirect to={`${match.path}${routes[0].path}`} />
    </Switch>
  </Suspense>
)

export default withRouter(Routes)
