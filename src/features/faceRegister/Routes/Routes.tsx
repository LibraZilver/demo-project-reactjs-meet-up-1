import React, { lazy, FC, Suspense } from 'react'
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import withRouter from 'common/hoc/withRouter'
const Intro = lazy(() => import('./Intro'))
const UserConfirm = lazy(() => import('./UserConfirm'))
const End = lazy(() => import('./End'))

const routes = [
  { path: '/intro', Component: Intro },
  { path: '/user-confirm', Component: UserConfirm },
  { path: '/end', Component: End },
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
