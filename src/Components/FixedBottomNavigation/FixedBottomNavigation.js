import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          sx={{ justifyContent: 'space-between', height: '54px' }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction sx={{ fontFamily: 'Figtree', maxWidth: '1rem', fontSize: '16px' }} label="Mute" />
          <BottomNavigationAction sx={{ fontFamily: 'Figtree', minWidth: '1rem', fontSize: '14px' }} label="Legal disclaimer if needed" />
          <BottomNavigationAction sx={{ fontFamily: 'Figtree', maxWidth: '1rem', fontSize: '16px' }} label="More info" />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}