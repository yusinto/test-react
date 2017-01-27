import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app/app';
import Home from './home/home';
import Contact from './contact/contact';

const routes =
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/contact" component={Contact}/>
  </Route>;

export default routes;