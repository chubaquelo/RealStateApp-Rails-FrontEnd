import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../actions';

const MobileMenu = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const authToken = useSelector((state) => state.session[0]);
  const isLoggedIn = useSelector((state) => state.session[1]);
  const dispatch = useDispatch();

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu((state) => !state);
  };

  const mobileMenuBtn = (
    <button
      onClick={handleToggleMobileMenu}
      type="button"
      className="h-10 w-10 flex md:hidden text-3xl cursor-pointer align-middle justify-center"
    >
      ☰
    </button>
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

  const menuLinks = (
    <>
      <Link onClick={() => setToggleMobileMenu(false)} to="/houses" className="">
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">Houses</div>
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
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">Lifestyle</div>
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

  const mobileMenu = (
    <div className="absolute w-screen h-screen bg-black text-white p-4">
      <button
        type="button"
        onClick={handleToggleMobileMenu}
        className="text-white w-11 h-11 text-6xl absolute top-5 right-5"
      >
        x
      </button>
      <ol className="h-full flex flex-col w-11/12 pb-40 pt-20 px-5 text-4xl items-center justify-evenly">
        {menuLinks}
        {signButtons}
      </ol>
    </div>
  );

  return (
    <>
      <div className="absolute top-1 right-1 justify-end text-6xl p-2">
        {mobileMenuBtn}
      </div>
      {toggleMobileMenu ? mobileMenu : null}
    </>
  );
};

export default MobileMenu;
