import React, { lazy, FC, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from 'common/components/PrivateRoute'
const FaceRegister = lazy(() => import('features/faceRegister/Routes'))

const routes = [{ restricted: false, path: '/face-register', Component: FaceRegister }]

const Routes: FC = () => (
  <Suspense fallback={<div />}>
    <Switch>
      {routes.map(({ restricted, path, Component }) =>
        restricted ? (
          <PrivateRoute key={path} path={path} component={Component} />
        ) : (
          <Route key={path} path={path} component={Component} />
        ),
      )}
      <Redirect to={routes[0].path} />
    </Switch>
  </Suspense>
)

export default Routes
