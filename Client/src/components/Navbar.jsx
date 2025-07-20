import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleNavLinkClick = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navbar, { toggle: true });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3 fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleNavLinkClick}>
          <img src={logo} alt="Logo" style={{ height: '55px', marginRight: '10px' }} />
          <span className="fw-bold fs-4 text-dark">Snackca</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold text-dark" to="/" onClick={handleNavLinkClick}>HOME</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold text-dark" to="/flavours" onClick={handleNavLinkClick}>FLAVOURS</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold text-dark" to="/ourstory" onClick={handleNavLinkClick}>OUR STORY</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold text-dark" to="/contact" onClick={handleNavLinkClick}>CONTACT</Link>
            </li>

            {user ? (
              <>
                <li className="nav-item mx-2">
                  <Link className="btn btn-warning text-white fw-semibold" to="/order">
                    Order Now
                  </Link>
                </li>
                <li className="nav-item ms-3">
                  <Link to="/dashboard">
                    <i className="bi bi-person-circle fs-3 text-dark"></i>
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item ms-3">
                <Link to="/auth" className="btn btn-warning text-white fw-semibold d-flex align-items-center">
                  <i className="bi bi-person-circle me-2"></i>Sign Up/Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
