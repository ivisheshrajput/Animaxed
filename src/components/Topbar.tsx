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
      <nav className="md:fixed flex p-4 space-x-3 text-md w-full text-white text-lg  justify-end font-PoppinsRegular   items-center bg-gradient-to-l  from-primary-color    ">
        <Link to="/home" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to={"/search"} onClick={() => setIsOpen(false)}>
          <FaSearch className="" />
        </Link>
        <Link to={"/cart"} onClick={() => setIsOpen(false)}>
          <FaShoppingBag />
        </Link>

        {user._id ? (
          <>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaUser />
            </button>
            <dialog open={isOpen}>
              <div>
                {user.role === "admin" && (
                  <Link to={"/dashboard"} onClick={() => setIsOpen(false)}>
                    Admin
                  </Link>
                )}
                <Link to={"/orders"} onClick={() => setIsOpen(false)}>
                  Orders
                </Link>
                <button onClick={logoutHandler}>
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
      </nav>
    </div>
  );
};

export default Topbar;
