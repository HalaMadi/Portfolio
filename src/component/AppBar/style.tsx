import { AppBar } from "@mui/material";
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
  text-decoration: none;
  color: black;
  font-weight: 300;
  font-size: 24px;
  &.active {
    color: #bd6e73;
  }
  &:hover {
    background-color: transparent;
  }
`;
