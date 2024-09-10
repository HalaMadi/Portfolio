import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  && {
    background: #F7E4DF;
    position: relative;
    left: 50%;
    transform: translateX(-50%); 
    width: 100vw;
    flexGrow: 1;
    padding: 20px;
    height:500px;
  }
`;
