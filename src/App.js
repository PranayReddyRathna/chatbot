import React, { useState, useEffect, useMemo } from 'react';
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import { getThemePallette } from "./theme/ThemePallette";
import { ThemeContext } from "./theme/ThemeContext";
import './App.css';

function App() {
  const storedMode = localStorage.getItem('theme');
  const [mode, setMode] = useState(storedMode || 'light');
  const [chat, setChat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useMemo(() => createTheme(getThemePallette(mode)), [mode]);
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container sx={{ background: 'linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))' }}>
          <Grid item xs={12} md={2.5}
            sx={{
              bgcolor: "primary.light",
              '@media(max-width:800px)': {
                width: '70%',
                transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 400ms ease',
              },
            }}
            position={{ xs: 'fixed', md: 'relative' }}
            height={'100vh'}
            zIndex={{ xs: 9999, md: 1 }}
            boxShadow={{ xs: menuOpen ? 10 : 0, md: 0 }}
          >
            <Sidebar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
          </Grid>
          <Grid item xs={12} md={9.5}>
            <Outlet context={{ chat, setChat, handleMobileMenu: setMenuOpen }} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
