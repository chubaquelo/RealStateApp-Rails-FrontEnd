import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { localStorageSignIn, getProperties } from './actions';
import SideBar from './components/SideBar';
import MobileMenu from './components/MobileMenu';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PropertySheet from './components/PropertySheet';
import DefaultNotFound from './containers/DefaultNotFound';
import Lifestyle from './containers/Lifestyle';
import Properties from './containers/Properties';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.session[1]);

  useEffect(() => {
    if (window.localStorage.getItem('sessionID') && !isLoggedIn) {
      dispatch(localStorageSignIn(window.localStorage.getItem('sessionID')));
    }
    dispatch(getProperties());
  }, []);

  return (
    <Router>
      <div className="flex w-screen min-h-screen">
        <MobileMenu />
        <aside className="hidden md:flex w-70">
          <SideBar />
        </aside>
        <main className="w-full min-h-screen">
          <Switch>
            <Route path="/sign_up" exact component={SignUp} />
            <Route path="/sign_in" exact component={SignIn} />
            <Route path="/lifestyle" exact component={Lifestyle} />
            <Route path="/houses" exact component={Properties} category="houses" />
            <Route path="/properties/:id" exact component={PropertySheet} />
            <Route path="/appartments" exact>
              <Properties category="appartments" />
            </Route>
            <Route path="*">
              <DefaultNotFound />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;

// import { BrowserRouter as Router } from 'react-router-dom';
// // import SignIn from './components/SignIn';
// // import SignUp from './components/SignUp';
// import SideBar from './components/SideBar';

// function App() {
//   return (
//     <div>
//       <Router>
//         <header>
//           <SideBar />
//         </header>
//       </Router>
//     </div>
//   );
// }

// export default App;
