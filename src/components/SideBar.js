import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../actions';
import FooterIcons from './FooterIcons';

const SideBar = () => {
  const authToken = useSelector((state) => state.session[0]);
  const isLoggedIn = useSelector((state) => state.session[1]);
  const dispatch = useDispatch();

  const menuLinks = (
    <>
      <Link
        to="/houses"
        className=""
      >
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">Houses</div>
      </Link>
      <Link
        to="/appartments"
        className=""
      >
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">
          Appartments
        </div>
      </Link>
      <Link
        to="/lifestyle"
        className=""
      >
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">
          Lifestyle
        </div>
      </Link>
      <Link
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
              to="/sign_in"
              className="p-3"
            >
              Sign In
            </Link>
          </div>
          <div className="hover:text-blue-400">
            <Link
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

  return (
    <div className="hidden sm:flex sticky top-0 text-gray-800 flex-col justify-between w-60 bg-white h-screen border-r">
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
