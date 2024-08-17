import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';

export default function Card({ img }) {
  return (
    <Grid>
      <Paper
        src={img}
        elevation={1}
        sx={{
          height: '13rem',
          width: '10rem',
          padding: '20px',
          borderColor: '#F0F0F0',
          borderStyle: 'solid',
          borderWidth: '3px'
        }}
      >
        <Box sx={{ width: '100%' }}>
          <img src={img}></img>
        </Box>
      </Paper>
    </Grid>
  )
}