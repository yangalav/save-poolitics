import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import ButtonComponent from '../../Components/ButtonComponent';
import Blurb from '../../Components/Blurb/Blurb';
import PruneHorns from '../../Assets/prune-horns.svg';

import './Home.css';

const headline = 'Save Poo-litics';
const description = (
  <div>
    <p>
      Every 4 years, sh*tizens of Poo-litics vote for their leader, but somehow always end up with Two-Horns or Wrinkled Prune.
    </p>
    <p>
      See how ranked choice voting effects how represented sh*tizens are compared with the current voting process.
    </p>
  </div>
)

const footNote = 'Play time: 10 min      Oct 2024';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          marginTop: 7,
          marginBottom: 5,
          textAlign: 'center',
          flexGrow: 1,
          maxWidth: 700,
          paddingLeft: '8%',
          paddingRight: '8%'
        }}
      >
        <Grid>
          <img src={PruneHorns} alt="" />
        </Grid>
        <Grid>
          <Blurb
            headline={headline}
            description={description}
            descriptionStyles={{ fontWeight: 400 }}
          />
        </Grid>
        <Grid>
          <Blurb
            description={footNote}
            descriptionStyles={{ fontSize: 15, color: 'grey', fontWeight: 400 }}
          />
        </Grid>
        <Grid>
          <ButtonComponent 
            label="Save Poo-litics" 
            href="/Intro"
            buttonStyles={{ 
              color: 'white',
              backgroundColor: '#6C2023',
            }}
          />
        </Grid>
      </Box>
    </>
  )
}