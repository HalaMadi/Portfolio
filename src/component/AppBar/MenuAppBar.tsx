import {
  Toolbar,
  Box,
  IconButton,
  Stack,
  Drawer,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { RouterNavLink, StyledAppBar } from "./style";
import Logo from "../../assets/Hala-dev.png";
import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";
const pages = ["Home", "About me", "Skills", "Projects", "Contact"];
const MenuAppBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const [navStyle, setNavStyle] = useState({
    backgroundColor: "transparent",
    boxShadow: "none",
  });
  // Function to add color and shadow on scroll
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavStyle({
        backgroundColor: "#F8F1F1",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
      });
    } else {
      setNavStyle({
        backgroundColor: "transparent",
        boxShadow: "none",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <StyledAppBar
        position="sticky"
        sx={{
          backgroundColor: navStyle.backgroundColor,
          boxShadow: navStyle.boxShadow,
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              component="img"
              src={Logo}
              sx={{ maxWidth: { xs: "40%", sm: "25%", md: "16%" } }}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="open drawer"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <Stack sx={{ padding: 2, textAlign: "center" }} spacing={2}>
                  {pages.map((page) => (
                    <RouterNavLink
                      key={page}
                      to={page.toLowerCase().replace(" ", "-")}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {page}
                    </RouterNavLink>
                  ))}
                </Stack>
              </Drawer>
            </Box>
            <Box
              sx={{
                justifyContent: "flex-end",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: 4,
              }}
            >
              {pages.map((page) => (
                <RouterNavLink
                  key={page}
                  to={page.toLowerCase().replace(" ", "-")}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {page}
                </RouterNavLink>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </>
  );
};

export default MenuAppBar;
