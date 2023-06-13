import React, { Component } from "react";
import Navbar from "../navbar/Navbar.js";
import styled from "styled-components";

const Div = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 17px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  div {
    width: 2rem;
    height: 0.3rem;
    background: ${(props) => (props.open ? "white" : "lightblue")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  clickHandler = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <>
        <Div onClick={this.clickHandler} open={this.state.open}>
          <div></div>
          <div></div>
          <div></div>
        </Div>
        <Navbar open={this.state.open} />
      </>
    );
  }
}

export default Hamburger;
