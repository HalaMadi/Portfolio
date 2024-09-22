import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  && {
    font-weight: 00;
   
    padding: 8px 16px;
    transition: background-color 0.3s ease, color 0.3s ease,
      border-color 0.3s ease;
    box-shadow: none;
    &:hover {
      color: #bd6e73;
      background-color: transparent;
      border-color: #f58f7c;
    }
  }
`;