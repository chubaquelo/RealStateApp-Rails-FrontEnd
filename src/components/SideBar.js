import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../actions';
import FooterIcons from './FooterIcons';

const SideBar = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const authToken = useSelector((state) => state.session[0]);
  const isLoggedIn = useSelector((state) => state.session[1]);
  const dispatch = useDispatch();

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu((prevState) => !prevState);
  };

  const menuLinks = (
    <>
      <Link
        onClick={() => setToggleMobileMenu(false)}
        to="/houses"
        className=""
      >
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">
          Houses
        </div>
      </Link>
      <Link
        onClick={() => setToggleMobileMenu(false)}
        to="/appartments"
        className=""
      >
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">
          Appartments
        </div>
      </Link>
      <Link
        onClick={() => setToggleMobileMenu(false)}
        to="/lifestyle"
        className=""
      >
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">
          Lifestyle
        </div>
      </Link>
      <Link
        onClick={() => setToggleMobileMenu(false)}
        to="/favourites"
        className=""
      >
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">
          Favourites
        </div>
      </Link>
    </>
  );

  const signButtons = (
    <>
      {!isLoggedIn && (
        <div className="flex justify-center text-sm text-gray-600 p-3">
          <div className="hover:text-blue-400">
            <Link
              onClick={() => setToggleMobileMenu(false)}
              to="/sign_in"
              className="p-3"
            >
              Sign In
            </Link>
          </div>
          <div className="hover:text-blue-400">
            <Link
              onClick={() => setToggleMobileMenu(false)}
              to="/sign_up"
              className="p-3"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
      {isLoggedIn && (
        <div className="flex justify-center text-sm text-gray-600">
          <div className="hover:text-blue-400">
            <button
              type="button"
              onClick={() => {
                setToggleMobileMenu(false);
                dispatch(signOut(authToken));
              }}
              className="p-3"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </>
  );
  const mobileMenuButton = (
    <button type="button" onClick={handleToggleMobileMenu}>
      ☰
    </button>
  );

  const mobileMenu = (
    <div className="absolute w-screen sm:hidden min-h-screen flex flex-col justify-around text-gray-800 bg-white p-4">
      <button
        type="button"
        onClick={handleToggleMobileMenu}
        className="w-11 h-11 text-6xl absolute top-5 right-5"
      >
        x
      </button>
      <div className="h-full flex flex-col w-11/12 pb-40 pt-10 px-5 text-4xl mx-auto items-center justify-evenly">
        {menuLinks}
      </div>
      {signButtons}
    </div>
  );

  return (
    <div className="sm:flex sticky top-0 text-gray-800 flex-col justify-between md:w-56 bg-white h-screen border-r">
      {toggleMobileMenu ? mobileMenu : null}
      <div className="sm:hidden absolute top-1 left-1 flex justify-end text-2xl p-2 my-auto">
        {mobileMenuButton}
      </div>
      <div className="hidden sm:block">
        <Link to="/" className="p-2">
          <div className="p-4 text-center hover:bg-blue-300 text-4xl hover:text-gray-100 font-semibold">
            Real State
          </div>
        </Link>
        {signButtons}
      </div>
      <div className="text-left pl-3 pb-20 font-semibold text-2xl hidden sm:block">
        {menuLinks}
      </div>
      <div className="hidden sm:block">
        <FooterIcons />
      </div>
    </div>
  );
};
export default SideBar;
