import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  && {
    text-decoration:none;
    padding: 10px;
    border-radius: 10px;
    &:hover{
       color:#BD6E73;
    }
  }
`;
// why this code doesn't work ??