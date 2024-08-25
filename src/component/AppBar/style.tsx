import { AppBar, Button } from "@mui/material";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: unset;
    box-shadow: none;
    padding: 0;
    margin: 0;
    min-height: auto;
    color: black;
    cursor:visible
  }
`;
export const StyledButton = styled(Button)`
  && {
    border-radius: 25px;
    background-color: #f58f7c;
    border: 2px solid #f58f7c;
    font-weight: 600;
    font-size:16px;
    padding: 8px 16px; 
    transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;
    box-shadow: none;
    &:hover {
      color: #f58f7c;
      background-color: transparent;
      border-color: #f58f7c;
    }
  }
`;
