import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => {
  const user = { _id: "sfcwf", role: "admin" };
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:flex md:justify-end w-full mb-20">
      <nav className="md:fixed flex p-4  text-md w-full text-white text-lg  justify-between font-PoppinsRegular   bg-gradient-to-l  from-primary-color  items-center   ">
        <div className="text-4xl">
          ani<span className="text-tertiary-color">maxed</span>
        </div>
        <div className="flex justify-end items-center  space-x-3">
          <Link
            to="/home"
            className="hover:text-tertiary-color"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to={"/search"}
            className="hover:text-tertiary-color"
            onClick={() => setIsOpen(false)}
          >
            <FaSearch className="" />
          </Link>
          <Link
            to={"/cart"}
            className="hover:text-tertiary-color"
            onClick={() => setIsOpen(false)}
          >
            <FaShoppingBag />
          </Link>

          {user._id ? (
            <>
              <button
                className="hover:text-tertiary-color"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <FaUser />
              </button>
              <dialog open={isOpen}>
                <div>
                  {user.role === "admin" && (
                    <Link
                      to={"/dashboard"}
                      className="hover:text-tertiary-color"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin
                    </Link>
                  )}
                  <Link
                    to={"/orders"}
                    className="hover:text-tertiary-color"
                    onClick={() => setIsOpen(false)}
                  >
                    Orders
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="hover:text-tertiary-color"
                  >
                    <FaSignOutAlt />
                  </button>
                </div>
              </dialog>
            </>
          ) : (
            <Link to={"/login"}>
              <FaSignInAlt />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
