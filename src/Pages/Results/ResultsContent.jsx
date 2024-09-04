import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Blurb from '../../../Components/Blurb/Blurb';

export default function BallotContent({ img, name, selectedCandidate, setSelectedCandidate }) {
  return (
      <Grid container direction="row" columnSpacing={3} sx={{ maxWidth: 230, justifyContent: 'space-between', textAlign: 'center', alignItems: 'center', paddingTop: 1 }}>
        <Grid>
          <Box 
            sx={{ 
              maxWidth: '4rem',
              maxHeight: '4rem',
            }}
            component="img"
            src={img}
          />
        </Grid>
        <Grid xs={2} sx={{ textAlign: 'left' }}>
          <Blurb
            headline={name}
            headlineStyles={{ fontSize: '1rem' }}
          />
        </Grid>
        <Grid sx={{ marginLeft: 3 }}>
          <Radio
            checked={selectedCandidate === name}
            onChange={(e) => setSelectedCandidate(e.target.value)}
            value={name}
            name="radio-buttons"
          />
        </Grid>
      </Grid>
  )
}