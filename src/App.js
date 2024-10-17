import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Home from './Pages/Home/Home.jsx';
import Intro from './Pages/Intro/Intro.jsx';
// import RotatingPoop from './Components/RotatingPoop';
import FixedBottomNavigation from './Components/FixedBottomNavigation/FixedBottomNavigation';

import '@fontsource/figtree/700.css';
import './App.css';
function App() {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', textAlign: 'center' }}>
      <Grid>
        <Home />
        {/* <Intro /> */}
      </Grid>
    </Box>
  );
}

export default App;
