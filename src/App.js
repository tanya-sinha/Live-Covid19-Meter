import React, {Suspense} from 'react';
//import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/home/home.component';
import Page404 from './pages/404/404.component';
import CountryPage from './pages/country/country.component';

import ErrorBoundary from './components/error-boundary/error-boundary.component';

import './App.css';

//const HomePage = lazy(() => import('./pages/home/home.component'));
function App() {
  return (
    <ErrorBoundary> 
    <Suspense fallback={<Page404 />}>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path="/country/:countryname" component={CountryPage} />
      <Route component={Page404} />
    </Switch>
    </Suspense>
    </ErrorBoundary> 
  );
}

export default App;
