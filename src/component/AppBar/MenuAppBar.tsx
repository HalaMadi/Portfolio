import {
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  Button,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledAppBar, StyledButton } from "./style";
import { NavLink } from "react-router-dom";
// import AnimatedCursor from 'react-animated-cursor';

const pages = ["Home", "Service", "Work", "Contact"];
const MenuAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="#f58f7c"
        outerAlpha={0.4}
        innerScale={1} 
        outerScale={2}  
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      /> */}
      <StyledAppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 400,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontFamily: "Helvetica now",
              }}
            >
              Hala-Dev
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <NavLink
                    key={page}
                    onClick={handleCloseNavMenu}
                    to={`/${page.toLowerCase()}`}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </NavLink>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 400,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontFamily: "Helvetica now",
              }}
            >
              Hala-Dev
            </Typography>
            <Box
              sx={{
                justifyContent: "center",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap:4
              }}
            >
              {pages.map((page) => (
                <Button
                component={NavLink}
                to={`/${page.toLowerCase()}`}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontWeight: "500",
                    fontSize: "18px",
                    textDecoration: 'none',
                    transition: 'none',
                    "&.active": {
                      color: '#F58F7C',
                    },
                    "&:hover": {
                      backgroundColor: 'transparent', 
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box>
              <StyledButton variant="contained">Hire Me</StyledButton>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </>
  );
};

export default MenuAppBar;
