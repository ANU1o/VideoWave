import React, { useEffect, useState } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) setShow(true);
      else setShow(false);
    });
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`fixed-top ${
        show && "bg-bg border-5 border-bottom border-primary"
      }`}
      data-bs-theme="dark"
    >
      <Container>
        <Link className="text-decoration-none" to="">
          <Navbar.Brand className="me-auto">
            <i class="fa-solid fa-circle-play text-primary me-2"></i>VideoWave
          </Navbar.Brand>
        </Link>

        <Nav
          className="ms-auto nav-underline nav-sm-justified flex-row"
          id="contentspy"
        >
          <NavLink
            to=""
            className={({ isActive, isPending }) =>
              isActive
                ? "nav-link text-center active"
                : isPending
                ? "nav-link text-center"
                : "nav-link text-center"
            }
          >
            <i class="fa-solid fa-home me-lg-1 me-sm-0"></i>
            <span className="d-lg-inline d-none">Home</span>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "nav-link text-center active"
                : isPending
                ? "nav-link text-center"
                : "nav-link text-center"
            }
            to="/Explore"
          >
            <i class="fa-solid fa-compass me-lg-1 me-sm-0"></i>
            <span className="d-lg-inline d-none">Explore</span>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "nav-link text-center active"
                : isPending
                ? "nav-link text-center"
                : "nav-link text-center"
            }
            to="/Upload"
          >
            <i class="fa-solid fa-upload me-lg-1 me-sm-0"></i>
            <span className="d-lg-inline d-none">Upload</span>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "nav-link text-center active"
                : isPending
                ? "nav-link text-center"
                : "nav-link text-center"
            }
            to="/History"
          >
            <i class="fa-solid fa-clock me-lg-1 me-sm-0"></i>
            <span className="d-lg-inline d-none">History</span>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
