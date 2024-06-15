import React, { useContext } from "react";
import Crime_Logo from "../Assests/Crime_Logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import { toast } from "react-toastify";
import Login_Icon from "../Assests/Login_Icon.png";
import Profile_Icon from "../Assests/Profile_Icon.png";
import Logout_Icon from "../Assests/Logout_Icon.png";
import Aboutus_Icon from "../Assests/Aboutus_Icon.png";
import Home_Icon from "../Assests/Home_Icon.png";

const Navbar = () => {
  const { token, setToken } = useContext(DataContext);

  const navigate = useNavigate();
  const logout = () => {
    // we have to remove the token
    toast.success("Logged out Successfully");
    localStorage.removeItem("token"); // token is the key name which we assign while adding
    localStorage.removeItem("user"); // token is the key name which we assign while adding
    setToken("");
    // When the user gets logout we sen them to home page we use navigate hook
    navigate("/");
  };
  const errorr = () => {
    // we have to remove the token
    toast.error("You Need To Login");
  };
  const skip = () => {};
  return (
    <div className=" container-fluid">
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a
            className="navbar-brand bg-primary"
            href="https://www.mallareddyuniversity.ac.in/"
          >
            <img src={Crime_Logo} alt="midh" width="100" className="rounded" />
          </a>

          <div class="collapse navbar-collapse" id="navbarNav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/main" className="nav-link">
              Main
            </Link>
          </div>
        </div>
      </nav> */}
      <nav className="navbar navbar-dark bg-dark   ">
        <div className="container-fluid">
          <a
            className="navbar-brand "
            href="https://www.mallareddyuniversity.ac.in/"
          >
            <img src={Crime_Logo} alt="midh" width="60" className="rounded" />
          </a>
          <h1 className="bg-danger text-light px-5 p-2 rounded-pill bg-opacity-75 border border-warning">
            <i className="text-decoration-underline"> Crime Alert System</i>
          </h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-decoration-underline"
                id="offcanvasDarkNavbarLabel"
              >
                Crime Alert System
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <form className="d-flex px-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 px-3">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <img
                      className="bg-light rounded-2 p-1"
                      src={Login_Icon}
                      width="44"
                    />
                    <span className="ps-2">Login</span>
                  </Link>
                </li>
                <li onClick={token ? skip : errorr} className="nav-item">
                  <Link to={token ? "/home" : "/"} className="nav-link">
                    <img
                      className="bg-light rounded-2 p-1"
                      src={Home_Icon}
                      width="44"
                    />
                    <span className="ps-2">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/AboutUs" className="nav-link">
                    <img
                      className="bg-light rounded-2 p-1"
                      src={Aboutus_Icon}
                      width="44"
                    />
                    <span className="ps-2">AboutUs</span>
                  </Link>
                </li>
                <li onClick={token ? skip : errorr} className="nav-item">
                  <Link to="/Profile" className="nav-link">
                    <img
                      className="bg-light rounded-pill "
                      src={Profile_Icon}
                      width="44"
                    />
                    <span className="ps-2">Profile</span>
                  </Link>
                </li>{" "}
                <li onClick={token ? logout : errorr} className="nav-item">
                  <Link to="/" className="nav-link">
                    <img
                      className="bg-light rounded-2 p-1"
                      src={Logout_Icon}
                      width="44"
                    />
                    <span className="ps-2">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
