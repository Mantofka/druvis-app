import React, { useEffect } from 'react';
import '../css/App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import UavPage from './UavPage';
import PrintingPage from './PrintingPage';
import Configuarion from '../admin-components/Configuarion';
import {
  RouteTransition,
  AnimatedRoutes,
} from '../framer-animation/RouteTransition';
import { auth } from './firebase';
import { useStateValue } from '../StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authedUser) => {
      if (authedUser) {  // If logged in
        dispatch({
          type: 'SET_USER',
          user: authedUser
        })
      }
      else {  // If logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, []);

  return (
    <div className='app'>
      <AnimatedRoutes exitBeforeEnter initial={false}>
        <RouteTransition exact path='/login' slideUp={30}>
          <Login />
        </RouteTransition>

        <RouteTransition exact path='/uav' slideUp={30}>
          <Header />
          <UavPage />
        </RouteTransition>

        <RouteTransition exact path='/3d-printing' slideUp={30}>
          <Header />
          <PrintingPage />
        </RouteTransition>

        <RouteTransition exact path='/login-success/:id' slideUp={30}>
          <Configuarion />
        </RouteTransition>

        <RouteTransition exact path='/' slideUp={30}>
          <Header />
          <Home />
        </RouteTransition>
      </AnimatedRoutes>
    </div>
  );
}

export default App;
