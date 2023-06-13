import React, { Component } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  justify-content: right;
  align-items: center;
  list-style: none;
  z-index: 10;
  li {
    padding: 10px 20px;
    color: gray;
    font-size: bold;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: right;
    text-align: right;
    background-color: lightblue;
    margin: 0;
    padding: 50px 50px 30px;
    position: fixed;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    transition: all 0.3s linear;
    right: 0;
    width: 200px;
    height: 100vh;
  }
`;

const Navbar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Shop</li>
      <li>Docs</li>
      <li>Github</li>
    </Ul>
  );
};

export default Navbar;
