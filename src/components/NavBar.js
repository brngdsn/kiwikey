// src/components/NavBar.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaKeyboard, FaGithub, FaBook } from 'react-icons/fa';

// Keyframes for glowing effect
const glow = keyframes`
  0% {
    text-shadow: 0 0 5px #61dafb, 0 0 10px #61dafb, 0 0 15px #61dafb;
  }
  50% {
    text-shadow: 0 0 10px #61dafb, 0 0 20px #61dafb, 0 0 30px #61dafb;
  }
  100% {
    text-shadow: 0 0 5px #61dafb, 0 0 10px #61dafb, 0 0 15px #61dafb;
  }
`;

// Styled Components
const Nav = styled.nav`
  width: 100%;
  padding: 10px 20px;
  background: rgba(40, 44, 52, 0.8); /* Semi-transparent */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Fixed at the top */
  top: 0;
  left: 0;
  z-index: 1000;

  /* Responsive adjustments */
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #61dafb;
  font-size: 1.5em;
  cursor: pointer;
  animation: ${glow} 2s infinite;

  &:hover {
    color: #21a1f1;
  }

  svg {
    margin-right: 8px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #f7f7f7;
    text-decoration: none;
    margin-left: 20px;
    display: flex;
    align-items: center;
    font-size: 1em;
    transition: color 0.3s;

    &:hover {
      color: #61dafb;
    }

    svg {
      margin-right: 5px;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 600px) {
    margin-top: 10px;
    flex-direction: column;

    a {
      margin-left: 0;
      margin-bottom: 10px;
    }
  }
`;

const NavBar = () => {
  return (
    <Nav className="nav">
      <Logo>
        <FaKeyboard />
        <span>qwert</span>
      </Logo>
      <NavLinks>
        <a
          href="https://github.com/your-username/your-repo" // Replace with your GitHub repo URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
        >
          <FaGithub />
          GitHub
        </a>
        <a
          href="https://github.com/your-username/your-repo/blob/main/README.md" // Replace with your README.md URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="README.md"
        >
          <FaBook />
          README
        </a>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
