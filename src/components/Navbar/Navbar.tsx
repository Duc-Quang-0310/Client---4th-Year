import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { route } from "../../common/config/routes/routesName";

const comparePathname = (pathname: string) => {
  if (pathname === "/home") {
    return 1;
  }
  if (pathname === "/our-work") {
    return 2;
  }
  if (pathname === "/involved") {
    return 3;
  }
  if (pathname === "/about") {
    return 4;
  }
  return 0;
};

const homeCheck = (pathname: string) => {
  if (pathname === "/home") {
    return 1;
  }
  return 0;
};

export const Navbar: React.FunctionComponent = () => {
  const windowPath = window.location.pathname;
  const pathNumber = comparePathname(windowPath);
  console.log(pathNumber);

  return (
    <nav className="navbar">
      <Link to={route.HOME}>
        {pathNumber === 1 ? (
          <img src="/img/logo-white.svg" alt="" />
        ) : (
          <img src="/img/logo-color.svg" alt="" />
        )}
      </Link>
      <div className="nav-list nav-home">
        <ul>
          <li>
            {homeCheck(windowPath) ? (
              <Link className={`nav-items`} to={route.HOME}>
                Our Work
              </Link>
            ) : (
              <Link
                className={`nav-items ${
                  pathNumber === 2 ? `nav-active` : `nav-inactive`
                } `}
                to={route.HOME}
              >
                Our Work
              </Link>
            )}

            <div className={`nav-underline`}></div>
          </li>
          <li>
            {homeCheck(windowPath) ? (
              <Link
                className={`nav-items 
               `}
                to={route.HOME}
              >
                Involved
              </Link>
            ) : (
              <Link
                className={`nav-items ${
                  pathNumber === 3 ? `nav-active` : `nav-inactive`
                } `}
                to={route.HOME}
              >
                Involved
              </Link>
            )}
            <div className={`nav-underline`}></div>
          </li>
          <li>
            {homeCheck(windowPath) ? (
              <Link className={`nav-items `} to={route.ABOUT}>
                About
              </Link>
            ) : (
              <Link
                className={`nav-items ${
                  pathNumber === 4 ? `nav-active` : `nav-inactive`
                } `}
                to={route.ABOUT}
              >
                About
              </Link>
            )}
            <div className={`nav-underline`}></div>
          </li>
          <li>
            <Link
              to={route.HOME}
              className={`nav-donate ${
                pathNumber === 1 ? `` : `nav-donate_reverse`
              }  `}
            >
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
