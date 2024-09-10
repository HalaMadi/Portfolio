import React from "react";
import Routes from "./Routes/Routes";
import "./index.css";
import { Container } from "@mui/material";
const App: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Routes />
      </Container>
    </>
  );
};

export default App;
