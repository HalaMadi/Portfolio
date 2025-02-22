import { AppBar, Button } from "@mui/material";
import { Link } from "react-scroll";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)`
  && {
    padding: 0;
    margin: 0;
    min-height: auto;
    color: black;
    cursor: visible;
  }
`;

export const RouterNavLink = styled(Link)`
  && {
    font-family: "Jost", sans-serif;
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    color: rgba(44, 34, 36, 0.85);
    &.active {
      color: #bd6e73;
    }
    &:hover {
      background-color: transparent;
      color: #bd6e73;
    }
  }
`;
export const ContactButtonStyles = styled(Button)`
  && {
    border: 1px solid rgba(92, 47, 53, 0.85);
    border-radius: 30px;
    font-size: 20px;
    color: rgba(92, 47, 53, 0.85);
    font-weight: 600;
    padding: 4px 24px;
    text-transform: none;
    transition: all 0.3s ease;
    &:hover {
      background-color: #bd6e73;
      color: #fff;
      border-color: #bd6e73;
    }
  }
`;
