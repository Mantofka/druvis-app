import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";

// Pages
import Configuarion from "../admin-components/Configuarion";
import NotFound from "./NotFound";
import SectionPage from "./SectionPage";

import {
  RouteTransition,
  AnimatedRoutes,
} from "../framer-animation/RouteTransition";
import { auth } from "./firebase";
import { useStateValue } from "../StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      auth.onAuthStateChanged((authedUser) => {
        if (authedUser) {
          // If logged in
          dispatch({
            type: "SET_USER",
            user: authedUser,
          });
        } else {
          // If logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }
  }, []);

  return (
    <div className='app'>
      <AnimatedRoutes exitBeforeEnter initial={false}>
        <RouteTransition exact path='/login' slideUp={30}>
          <Login />
        </RouteTransition>

        <RouteTransition exact path='/3d-printing' slide={window.innerWidth}>
          <Header />
          <SectionPage
            sectionAbbreviation='printing'
            sectionTitle='3D spausdinimas'
            description='Kuriamas trimatis objektas pagal kompiuteryje sukurtą skaitmeninį modelį. Taip galima pagaminti įvairių formų gaminius.'
          />
        </RouteTransition>

        <RouteTransition exact path='/modelling' slide={-window.innerWidth}>
          <Header />
          <SectionPage
            sectionAbbreviation='modelling'
            sectionTitle='Modeliavimas'
            description='Konstrukciniai darbai ugdo kūrybinius konstravimo gebėjimus. Tai darbai, kuriuose susijungia konstravimas bei kūrybiškumas.'
          />
        </RouteTransition>

        <RouteTransition exact path='/engineering' slide={window.innerWidth}>
          <Header />
          <SectionPage
            sectionAbbreviation='engineering'
            sectionTitle='Elektronikos inžinerija'
            description='Mokinių darbai sukurti naudojant įvairius prietaisus ir sistemas naudojančias elektrą, elektroniką ir elektromagnetizmą.'
          />
        </RouteTransition>

        <RouteTransition exact path='/uav' slide={-window.innerWidth}>
          <Header />
          <SectionPage
            sectionAbbreviation='uav'
            sectionTitle='Bepiločiai orlaiviai'
            description='Mokiniai, įgavę elementarių žinių apie techninį brėžinį, projekcijas, gamina paprasčiausius sklandytuvų, lėktuvų modelius, mokosi juo valdyti.'
          />
        </RouteTransition>

        <RouteTransition exact path='/login-success/' slideUp={30}>
          {user && <Configuarion />}
        </RouteTransition>

        <RouteTransition exact path='/' slide={window.innerWidth}>
          <Header />
          <Home />
        </RouteTransition>
        <RouteTransition path='/'>
          <Header />
          <NotFound />
        </RouteTransition>
      </AnimatedRoutes>
    </div>
  );
}

export default App;
