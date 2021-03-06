import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { LogoutContainer, MainContainer, HomeContainer, AuthenticateContainer, FeedContainer } from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer}>
        <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path='feed' component={FeedContainer} onEnter={checkAuth} />
        <Route path='logout' component={LogoutContainer} onEnter={checkAuth} />
        <IndexRoute component={HomeContainer} onEnter={checkAuth} />
      </Route>
    </Router>
  )
}
