import React, { ComponentType } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route } from 'react-router-dom'
import classNames from 'classnames'
import './withRouter.scss'

const DURATION_TRANSITION = 700

const withRouter = (Component: ComponentType<any>) => () => (
  <Route>
    {({ location, match, history }) => {
      const animation = classNames({
        prev: history.action === 'POP',
      })
      return (
        <TransitionGroup className={`transition-item ${animation}`}>
          <CSSTransition key={location.key} timeout={DURATION_TRANSITION} unmountOnExit={true}>
            <div className="slide">
              <Component location={location} match={match} />
            </div>
          </CSSTransition>
        </TransitionGroup>
      )
    }}
  </Route>
)

export default withRouter
