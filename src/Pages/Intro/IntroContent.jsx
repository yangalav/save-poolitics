import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Blurb from '../../Components/Blurb/Blurb';


export default function IntroContent({ img, headline, description, descriptionStyles }) {
  return (
    <>
      <Grid xs={4} sx={{ padding: 2 }}>
        <Box sx={{ width: '100%' }} component="img" src={img} />
      </Grid>
      <Grid xs={8} sx={{ textAlign: 'left', padding: 2 }}>
        <Blurb
          headline={headline}
          headlineStyles={{ fontSize: '1.5rem' }}
          description={description}
          descriptionStyles={descriptionStyles}
        />
      </Grid>
    </>
  )
}