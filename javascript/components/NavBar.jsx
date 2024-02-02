import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import * as Messages from '../utils/constants';

export const NavBar = () => {
  return (
    <Nav>
      <Nav.Item className="mr-2">
        <Nav.Link href="./JoshuaLaeschResume.pdf">Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item className="ml-2">
        <Link to="top_of_page" spy={true} smooth={true} duration={1000} className="nav-link">
          Go To Top
        </Link>
      </Nav.Item>
    </Nav>
  );
};
