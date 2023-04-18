import CartWidget from "../CartWidget/CartWidget";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import { useState } from "react";
import HomeIcon from "../HomeIcon/HomeIcon";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <div className="home-icon" to="/">
          <NavLink to="/">
            <HomeIcon />
            E-commerce
          </NavLink>
        </div>
        <div className={`links ${clicked ? "active" : ""}`}>
          <NavLink to="/categoria">categoria1</NavLink>
          <NavLink to="/categoria">categroria2</NavLink>
          <NavLink to="/categoria">categoria3</NavLink>
        </div>
        <div className="menu-user">
        <NavLink to="/cart"><CartWidget /></NavLink>
          <div className="burger">
            <BurgerButton clicked={clicked} handleClick={handleClick} />
          </div>
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default NavBar;

const NavContainer = styled.nav`
  padding: .4rem;
  background: rgb(232,194,18);
  background: linear-gradient(333deg, rgba(232,194,18,1) 0%, rgba(140,66,158,1) 50%, rgba(59,116,138,1) 89%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 2rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
      position: absolute;
      margin-left: 3px;
    }
  }
  .menu-user{
    display: flex;
    .cart-widget{
      padding-top: 5px;
    }
    
  }
  .home-icon{
    padding-right: 1rem;
    h2{
      color: black;
      font-weight: 400;
    
      display: flex;
  }
`;
const BgDiv = styled.div`
  background: rgb(232, 194, 18);
  background: linear-gradient(
    333deg,
    rgba(232, 194, 18, 1) 0%,
    rgba(140, 66, 158, 1) 50%,
    rgba(59, 116, 138, 1) 89%
  );
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0% 0% 80% 0%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
