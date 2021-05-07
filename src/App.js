import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { localStorageSignIn } from './actions';
import SideBar from './components/SideBar';
import MobileMenu from './components/MobileMenu';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import DefaultNotFound from './containers/DefaultNotFound';
import Lifestyle from './containers/Lifestyle';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.session[1]);

  useEffect(() => {
    if (window.localStorage.getItem('sessionID') && !isLoggedIn) {
      dispatch(localStorageSignIn(window.localStorage.getItem('sessionID')));
    }
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
            <Route path="/sign_up" exact>
              <SignUp />
            </Route>
            <Route path="/sign_in" exact>
              <SignIn />
            </Route>
            <Route path="/lifestyle" exact>
              <Lifestyle />
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
